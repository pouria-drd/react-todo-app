import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";

import OpenIcon from "../../icons/OpenIcon";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";

interface TopicTableItemProps {
    topic: Topic;
}
const TopicsTableItem = ({ topic }: TopicTableItemProps) => {
    const navigate = useNavigate();

    const handleDate = (date: Date) => {
        return new Date(date).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
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

    return (
        <div className="flex flex-col items-start justify-between gap-3 border border-indigo-500 rounded p-4">
            <h4
                onClick={() => navigate(ROUTES.Topic_Detail_Route + topic.id)}
                className="cursor-pointer overflow-hidden text-nowrap text-xl h-full w-full">
                {topic.name}
            </h4>

            <div className="flex items-start justify-between gap-4 h-full w-full">
                <div
                    onClick={() =>
                        navigate(ROUTES.Topic_Detail_Route + topic.id)
                    }
                    className="cursor-pointer flex items-center gap-2 w-full">
                    <p className="text-gray-300 text-sm text-left r2l">
                        {handleDate(topic.createdAt)}
                    </p>
                    <p className="text-gray-400 text-xs">
                        {taskToText(topic.tasks?.length)}
                    </p>
                </div>

                <div className="flex items-center justify-center gap-3">
                    <button className="text-blue-400">
                        <EditIcon />
                    </button>
                    <button className="text-rose-400">
                        <DeleteIcon />
                    </button>
                    <Link to={ROUTES.Topic_Detail_Route + topic.id}>
                        <OpenIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopicsTableItem;
