import { useState } from "react";

import PlusIcon from "../../icons/PlusIcon";
import Button from "../custom-ui/button/Button";
import NewTopicForm from "../forms/NewTopicForm";

const HomeHeader = () => {
    const [openTopicForm, setOpenTopicForm] = useState<boolean>(false);

    return (
        <>
            <div
                className="flex items-center justify-between cursor-default
                border-b border-white
                w-full py-6">
                <h1 className="text-2xl sm:text-3xl">TOPICS</h1>

                <Button
                    onClick={() => setOpenTopicForm(true)}
                    type="light"
                    outlined={true}>
                    <span>
                        <PlusIcon />
                    </span>

                    <p>New Topic</p>
                </Button>
            </div>

            {openTopicForm && (
                <NewTopicForm
                    openTopicForm={openTopicForm}
                    onClose={() => setOpenTopicForm(false)}
                />
            )}
        </>
    );
};

export default HomeHeader;
