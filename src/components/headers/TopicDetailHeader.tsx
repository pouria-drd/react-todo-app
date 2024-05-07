import { useState } from "react";

import PlusIcon from "../../icons/PlusIcon";
import Button from "../custom-ui/button/Button";

import NewTaskForm from "../forms/NewTaskForm";

interface TopicDetailHeaderProps {
    topic: Topic | undefined;
}

const TopicDetailHeader = ({ topic }: TopicDetailHeaderProps) => {
    const [openTaskForm, setOpenTaskForm] = useState<boolean>(false);

    if (!topic) {
        return (
            <div
                className="flex items-center justify-between cursor-default
                border-b border-white
                w-full py-6">
                <h1 className="text-xl sm:text-2xl">Topic not found</h1>
            </div>
        );
    }

    return (
        <>
            <div
                className="flex items-center justify-between cursor-default
                border-b border-white
                w-full py-6">
                <h1 className="text-xl sm:text-2xl">{topic.name}</h1>

                <Button
                    onClick={() => setOpenTaskForm(true)}
                    type="light"
                    outlined={true}>
                    <span>
                        <PlusIcon />
                    </span>

                    <p className="text-sm">New Task</p>
                </Button>
            </div>

            {openTaskForm && (
                <NewTaskForm
                    topicId={topic.id}
                    openTopicForm={openTaskForm}
                    onClose={() => setOpenTaskForm(false)}
                />
            )}
        </>
    );
};

export default TopicDetailHeader;
