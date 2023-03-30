import { ChangeEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadPhoto } from "../../api/photo";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { useCookies } from "react-cookie";

export const Uploader: React.FC = () => {
    const [cookies] = useCookies(["userId"]);
    const queryClient = useQueryClient();
    const mutation = useMutation(uploadPhoto, {
        onSuccess(response) {
            queryClient.invalidateQueries({ queryKey: ["photos"] });
            response.json().then((data) => console.log(data));
        },
    });
    const uploadFile = (e: ChangeEvent) => {
        const files = (e.target as HTMLInputElement).files;

        console.log(files);
        const formData = new FormData();
        Object.values(files as ArrayLike<File>).forEach((file) => {
            formData.append("file", file);
            formData.append("userId", cookies.userId);
        });

        mutation.mutate(formData);
    };
    return (
        <form>
            <label className="flex justify-center flex-col items-center border-dashed border-4 border-slate-400 rounded-lg py-8 bg-white">
                <p>Upload files:</p>
                <ArrowUpTrayIcon className="h-12 w-12 text-blue-500" />
                <input
                    type="file"
                    multiple
                    onChange={uploadFile}
                    className="hidden"
                />
            </label>
        </form>
    );
};
