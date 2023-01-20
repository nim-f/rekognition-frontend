import { QueryFunctionContext } from "@tanstack/react-query";
import { API_URL } from "../constants/api";
import { UserData } from "../types/user";
import { encodeQueryParams } from "../utils/encodeQueryParams";

export const registerUser = (data: UserData) => {
    return fetch(`${API_URL}/register`, {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export const loginUser = (data: UserData) => {
    return fetch(`${API_URL}/login`, {
        method: "POST",
        body: JSON.stringify(data),
    });
};
