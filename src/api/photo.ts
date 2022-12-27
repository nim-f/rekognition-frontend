const API_URL = "http://localhost:3009";

export const uploadPhoto = (body: FormData) =>
    fetch(API_URL, {
        method: "POST",
        body,
    });

export const fetchPhotos = () => fetch(API_URL).then((res) => res.json());
