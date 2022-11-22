import { ChangeEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { uploadPhoto } from "../../api/photo";

export const Uploader: React.FC = () => {
    const mutation = useMutation(uploadPhoto, {
        onSuccess(response) {
            response.json().then((data) => console.log(data));
        },
    });
    const uploadFile = (e: ChangeEvent) => {
        const files = (e.target as HTMLInputElement).files;

        console.log(files);
        const formData = new FormData();
        Object.values(files as ArrayLike<File>).forEach((file) =>
            formData.append("file", file)
        );

        mutation.mutate(formData);
    };
    return (
        <form>
            <p>Upload files:</p>
            <input type="file" multiple onChange={uploadFile} />
        </form>
    );
};
