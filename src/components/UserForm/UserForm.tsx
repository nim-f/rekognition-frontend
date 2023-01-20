import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";

interface UserFormProps {
    onSubmit: (data: any) => void;
}

export const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="form-group mb-6">
                    <label className="form-label inline-block mb-2 text-gray-700">
                        Email
                    </label>
                    <input
                        {...register("email", { required: true })}
                        className="form-control
                          block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                    {errors.email && <span>This field is required</span>}
                </div>
                {/* include validation with required or other standard HTML validation rules */}
                <div className="form-group mb-6">
                    <label className="form-label inline-block mb-2 text-gray-700">
                        Email
                    </label>
                    <input
                        {...register("password", { required: true })}
                        className="form-control
                          block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                    {/* errors will return when field validation fails  */}
                    {errors.password && <span>This field is required</span>}
                </div>

                <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
            </form>
        </div>
    );
};
