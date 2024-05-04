import { useState } from "react";
import TickIcon from "./icons/TickIcon";

interface CheckButtonProps {
    defaultValue?: boolean;
    onClick: () => void;
}

const CheckButton = (checkButtonProps: CheckButtonProps) => {
    const [checked, setChecked] = useState<boolean | undefined>(
        checkButtonProps.defaultValue
    );

    const handleCheckboxChange = () => {
        const newValue = !checked;
        setChecked(newValue);
        checkButtonProps.onClick();
    };

    return (
        <button
            onClick={handleCheckboxChange}
            className={`size-5 flex items-center justify-center text-white
            rounded ${checked ? "bg-indigo-500" : "bg-zinc-500"}`}>
            {checked && <TickIcon />}
        </button>
    );
};

export default CheckButton;
