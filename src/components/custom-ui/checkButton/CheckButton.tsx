import { useState } from "react";
import TickIcon from "./icons/TickIcon";

interface CheckButtonProps {
    onClick: () => void;
}

const CheckButton = (checkButtonProps: CheckButtonProps) => {
    const [checked, setChecked] = useState<boolean>();

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
