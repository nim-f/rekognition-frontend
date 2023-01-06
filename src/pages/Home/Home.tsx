import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPhotos } from "../../api/photo";
import { ImagesList } from "../../components/ImagesList/ImagesList";
import { Uploader } from "../../components/Uploader/Uploader";

export const Home: React.FC = ({}) => {
    const { fetchNextPage, hasNextPage, isLoading, data } = useInfiniteQuery({
        queryKey: ["photos", { limit: 5 }],
        getNextPageParam: (lastPage) => lastPage.lastKey,
        queryFn: fetchPhotos,
    });

    return (
        <div>
            <Uploader />
            <ImagesList
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
                isLoading={isLoading}
                data={data}
            />
        </div>
    );
};
