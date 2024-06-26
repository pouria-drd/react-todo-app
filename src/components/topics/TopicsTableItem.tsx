import { useState } from "react";
import { ROUTES } from "../../router/routes";
import { Link, useNavigate } from "react-router-dom";
import { useTopicContext } from "../../context/TopicContext";

import OpenIcon from "../../icons/OpenIcon";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import EditTopicForm from "../../components/forms/EditTopicForm";

interface TopicTableItemProps {
    topic: Topic;
}
const TopicsTableItem = ({ topic }: TopicTableItemProps) => {
    const navigate = useNavigate();
    const { deleteTopic } = useTopicContext();

    const [openEditTopicForm, setOpenEditTopicForm] = useState<boolean>(false);

    const handleDate = (date: Date) => {
        return new Date(date).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            // second: "2-digit",
            hour12: false,
        });
    };

    const taskToText = (taskLength: number | undefined) => {
        return taskLength
            ? taskLength < 2
                ? "1 task"
                : taskLength + " tasks"
            : "No tasks";
    };

    const handleTopicDelete = (topicId: string) => {
        const confirmed = confirm(
            `Do you really want to delete ${topic.name}?`
        );

        if (!confirmed) return;
        else {
            deleteTopic(topicId);
        }
    };

    return (
        <>
            <div className="flex flex-col items-start justify-between border border-indigo-500 rounded p-4">
                <h4
                    onClick={() =>
                        navigate(ROUTES.Topic_Detail_Route + topic.id)
                    }
                    className="cursor-pointer overflow-hidden text-nowrap text-xl h-full w-full">
                    {topic.name}
                </h4>

                <div className="flex items-start justify-between gap-4 h-full w-full">
                    <div
                        onClick={() =>
                            navigate(ROUTES.Topic_Detail_Route + topic.id)
                        }
                        className="cursor-pointer flex items-end gap-2 w-full h-full">
                        <p className="text-gray-300 text-xs text-nowrap text-left r2l">
                            {handleDate(topic.createdAt)}
                        </p>
                        <p className="text-gray-400 text-[10px] text-nowrap">
                            {taskToText(topic.tasks?.length)}
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                        <button
                            onClick={() => setOpenEditTopicForm(true)}
                            className="text-blue-400">
                            <EditIcon />
                        </button>

                        <button
                            onClick={() => handleTopicDelete(topic.id)}
                            className="text-rose-400">
                            <DeleteIcon />
                        </button>

                        <Link to={ROUTES.Topic_Detail_Route + topic.id}>
                            <OpenIcon />
                        </Link>
                    </div>
                </div>
            </div>

            {openEditTopicForm && (
                <EditTopicForm
                    topicToEdit={topic}
                    openTopicForm={openEditTopicForm}
                    onClose={() => setOpenEditTopicForm(false)}
                />
            )}
        </>
    );
};

export default TopicsTableItem;
