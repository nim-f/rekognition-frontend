const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3009";

console.log({ API_URL });

export const uploadPhoto = (body: FormData) =>
    fetch(API_URL, {
        method: "POST",
        body,
    });

export const fetchPhotos = () => fetch(API_URL).then((res) => res.json());
