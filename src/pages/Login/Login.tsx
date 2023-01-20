import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { loginUser } from "../../api/user";
import { UserForm } from "../../components/UserForm/UserForm";
import { UserData } from "../../types/user";

export const Login: React.FC = () => {
    const [cookies, setCookie] = useCookies();
    const login = useMutation(loginUser, {
        onSuccess: (res) => {
            console.log("login is successful");
            res.json().then((data) => {
                const { AccessToken, ExpiresIn, RefreshToken } = data;

                setCookie("AccessToken", AccessToken, { maxAge: ExpiresIn });
                setCookie("RefreshToken", RefreshToken, { maxAge: ExpiresIn });
            });
        },
    });

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
