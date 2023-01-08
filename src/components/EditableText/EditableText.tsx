import { useState } from "react";
import { Button } from "../Button/Button";

interface EditableTextProps {
    value: string;
    onSave: (newName: string) => void;
}
export const EditableText: React.FC<EditableTextProps> = ({
    value,
    onSave,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newValue, setNewValue] = useState(value);

    const saveText = () => {
        setIsEditing(false);
        onSave(newValue);
    };
    if (isEditing) {
        return (
            <div>
                <input
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    className="px-1
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
                <Button onClick={saveText}>Save</Button>
            </div>
        );
    }

    return (
        <div>
            {value}
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
        </div>
    );
};
