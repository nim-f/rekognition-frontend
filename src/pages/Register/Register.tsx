import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../api/user";
import { UserForm } from "../../components/UserForm/UserForm";
import { UserData } from "../../types/user";

export const Register: React.FC = () => {
    const register = useMutation(registerUser, {
        onSuccess: (res) => {
            console.log("register is successful");
        },
    });

    const onSubmit = (data: UserData) => {
        register.mutate(data);
    };

    return (
        <div>
            <h1 className="text-4xl leading-tight mb-4 pb-4">Register</h1>

            <UserForm onSubmit={onSubmit} />
        </div>
    );
};
