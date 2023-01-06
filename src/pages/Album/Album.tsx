import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchPhotos } from "../../api/photo";
import { ImagesList } from "../../components/ImagesList/ImagesList";

export const Album: React.FC = () => {
    const { label } = useParams();
    const { fetchNextPage, hasNextPage, isLoading, data } = useInfiniteQuery({
        queryKey: ["photos", { limit: 5, label }],
        getNextPageParam: (lastPage, allPages) => lastPage.lastKey,
        queryFn: fetchPhotos,
    });

    return (
        <div>
            <h1>Album {label}</h1>
            <ImagesList
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
                isLoading={isLoading}
                data={data}
            />
        </div>
    );
};
