import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";

interface UserFormProps {
    onSubmit: (data: any) => void;
    setError?: (data: any) => void;
    error?: string | null;
}

export const UserForm: React.FC<UserFormProps> = ({
    onSubmit,
    setError,
    error,
}) => {
    const {
        register,
        handleSubmit,
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
                        {...register("email", {
                            required: true,
                            onChange: () => setError?.(null),
                        })}
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
                        {...register("password", {
                            required: true,
                            onChange: () => setError?.(null),
                        })}
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
                    {error && <span>{error}</span>}
                </div>

                <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
            </form>
        </div>
    );
};
