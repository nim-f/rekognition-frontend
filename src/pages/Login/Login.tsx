import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/user";
import { UserForm } from "../../components/UserForm/UserForm";
import { UserData } from "../../types/user";

export const Login: React.FC = () => {
    const queryClient = useQueryClient();
    const [cookies, setCookie] = useCookies([
        "AccessToken",
        "RefreshToken",
        "userId",
    ]);
    const navigate = useNavigate();
    const login = useMutation(loginUser, {
        onSuccess: (res) => {
            console.log("login is successful");
            res.json().then((data) => {
                if (data.statusCode !== 200) {
                    console.error(data.code, data.message);
                } else {
                    const { AccessToken, ExpiresIn, RefreshToken, sub } = data;
                    queryClient.invalidateQueries(["photos"]);
                    setCookie("AccessToken", AccessToken, {
                        maxAge: ExpiresIn,
                    });
                    setCookie("RefreshToken", RefreshToken, {
                        maxAge: ExpiresIn,
                    });
                    setCookie("userId", sub, { maxAge: ExpiresIn });
                }
            });
        },
        onError: (error) => {
            console.error(error);
        },
    });

    useEffect(() => {
        if (cookies.AccessToken) navigate("/");
    }, [cookies, navigate]);

    const onSubmit = (data: UserData) => {
        login.mutate(data);
    };

    return (
        <div>
            <h1 className="text-4xl leading-tight mb-4 pb-4">Log in</h1>

            <UserForm onSubmit={onSubmit} />
        </div>
    );
};
