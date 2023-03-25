import { QueryFunctionContext } from "@tanstack/react-query";
import { Cookies } from "react-cookie";
import { API_URL } from "../constants/api";
import { ImageInterface } from "../types/image";
import { encodeQueryParams } from "../utils/encodeQueryParams";

console.log({ API_URL });

const cookies = new Cookies();

export const uploadPhoto = (body: FormData) =>
    fetch(API_URL, {
        method: "POST",
        body,
        headers: {
            Authorization: `Bearer ${cookies.get("AccessToken")}`,
        },
    });

export const updatePhoto = (
    data: Partial<ImageInterface & { newName: string }>
) => {
    return fetch(`${API_URL}/update`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Authorization: `Bearer ${cookies.get("AccessToken")}`,
        },
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
        headers: {
            Authorization: `Bearer ${cookies.get("AccessToken")}`,
        },
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
        })}`,
        {
            headers: {
                Authorization: `Bearer ${cookies.get("AccessToken")}`,
            },
        }
    ).then((res) => res.json());
};
