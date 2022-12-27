interface ButtonProps {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    disabled,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
        >
            {children}
        </button>
    );
};
