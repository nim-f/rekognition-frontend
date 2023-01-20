import { QueryFunctionContext } from "@tanstack/react-query";
import { API_URL } from "../constants/api";
import { ImageInterface } from "../types/image";
import { encodeQueryParams } from "../utils/encodeQueryParams";

console.log({ API_URL });

export const uploadPhoto = (body: FormData) =>
    fetch(API_URL, {
        method: "POST",
        body,
    });

export const updatePhoto = (
    data: Partial<ImageInterface & { newName: string }>
) => {
    return fetch(`${API_URL}/update`, {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export const deletePhoto = ({
    primary_key,
    name,
}: {
    primary_key: string;
    name: string;
}) => {
    return fetch(`${API_URL}/delete`, {
        method: "DELETE",
        body: JSON.stringify({ primary_key, name }),
    });
};

export const fetchPhotos = ({
    queryKey,
    pageParam,
}: QueryFunctionContext<
    [string, { limit: number; label?: string }],
    string | undefined
>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_key, { limit, label }] = queryKey;
    return fetch(
        `${API_URL}?${encodeQueryParams({
            limit,
            label,
            startKey: pageParam,
        })}`
    ).then((res) => res.json());
};
