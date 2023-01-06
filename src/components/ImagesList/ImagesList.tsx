import { XCircleIcon } from "@heroicons/react/24/solid";
import { InfiniteData } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

interface Image {
    url: string;
    labels: string[];
    primary_key: string;
    name: string;
}

interface ImagesListProps {
    fetchNextPage: Function;
    hasNextPage?: boolean;
    isLoading?: boolean;
    data?: InfiniteData<{ items: Image[] }>;
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
                    return page.items.map((image: Image) => (
                        <div
                            key={image.primary_key}
                            className="rounded overflow-hidden shadow-lg bg-white mb-4 relative"
                        >
                            <div className="absolute top-1 right-1">
                                <XCircleIcon className="h-10 w-10 text-gray-500 opacity-50" />
                            </div>
                            <img
                                src={image.url}
                                alt={image.labels[0]}
                                className="w-full"
                            />
                            <div className="px-6 py-4">
                                <h4 className="text-gray-900 text-xl font-medium mb-2 pb-2">
                                    {image.name}
                                </h4>

                                {image.labels.map((label) => (
                                    <span
                                        key={label}
                                        className="inline-flex items baseline bg-gray-200 rounded-full mr-2 mb-2 px-2 py-1 text-sm font-semibold text-gray-700"
                                    >
                                        <Link
                                            to={`/album/${label}`}
                                            className="p-1"
                                        >
                                            #{label}
                                        </Link>
                                        <XCircleIcon className="h-6 w-6 text-red-500" />
                                    </span>
                                ))}
                            </div>
                        </div>
                    ));
                })}
            </div>
            {hasNextPage ? (
                <Button onClick={() => fetchNextPage()}>More</Button>
            ) : null}
        </div>
    );
};
