import { InfiniteData } from "@tanstack/react-query";
import { ImageInterface } from "../../types/image";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";

interface ImagesListProps {
    fetchNextPage: Function;
    hasNextPage?: boolean;
    isLoading?: boolean;
    data?: InfiniteData<{ items: ImageInterface[] }>;
}

export const ImagesList: React.FC<ImagesListProps> = ({
    fetchNextPage,
    hasNextPage,
    isLoading,
    data,
}) => {
    if (isLoading) return <>Loading... </>;
    return (
        <div>
            <div className="columns-3 gap-4 my-8">
                {data?.pages.map((page) => {
                    return page?.items?.map((image: ImageInterface) => (
                        <Image image={image} />
                    ));
                })}
            </div>
            {hasNextPage ? (
                <Button onClick={() => fetchNextPage()}>More</Button>
            ) : null}
        </div>
    );
};
