import classNames from "classnames";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    light?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    disabled,
    onClick,
    light,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={classNames({
                "text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded":
                    !light,
                "p-1": light,
            })}
        >
            {children}
        </button>
    );
};
