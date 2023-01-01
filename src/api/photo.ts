import { QueryFunctionContext } from "@tanstack/react-query";
import { encodeQueryParams } from "../utils/encodeQueryParams";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3009";

console.log({ API_URL });

export const uploadPhoto = (body: FormData) =>
    fetch(API_URL, {
        method: "POST",
        body,
    });

export const fetchPhotos = ({
    queryKey,
    pageParam,
}: QueryFunctionContext<[string, { limit: number }], string | undefined>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_key, { limit }] = queryKey;
    return fetch(
        `${API_URL}?${encodeQueryParams({
            limit,
            ...(pageParam ? { startKey: pageParam } : {}),
        })}`
    ).then((res) => res.json());
};
