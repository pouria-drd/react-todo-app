import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routes";

import OpenIcon from "../../icons/OpenIcon";

interface TopicTableItemProps {
    topic: Topic;
}
const TopicsTableItem = ({ topic }: TopicTableItemProps) => {
    return (
        <Link
            to={ROUTES.Topic_Detail_Route + topic.id}
            className="cursor-default flex flex-col gap-2 border border-indigo-500 rounded p-4">
            <div className="flex items-center justify-between gap-1">
                <h4 className="text-xl sm:text-2xl">{topic.name}</h4>
                <Link to={ROUTES.Topic_Detail_Route + topic.id}>
                    <OpenIcon />
                </Link>
            </div>

            <div className="flex items-center justify-between gap-1">
                <p className="text-gray-300 text-sm text-left r2l">
                    {new Date(topic.createdAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: false,
                    })}{" "}
                </p>
                <p className="text-gray-400 text-xs">
                    {topic.tasks?.length
                        ? topic.tasks.length < 2
                            ? "task"
                            : "tasks"
                        : "No tasks"}
                </p>
            </div>
        </Link>
    );
};

export default TopicsTableItem;