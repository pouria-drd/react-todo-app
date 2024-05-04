interface TopicTableItemProps {
    topic: Topic;
}
const TopicTableItem = ({ topic }: TopicTableItemProps) => {
    return (
        <div className="cursor-default flex flex-col gap-2 border border-indigo-500 rounded p-4">
            <h4 className="text-xl sm:text-2xl">{topic.name}</h4>

            <div className="flex items-center gap-2">
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
        </div>
    );
};

export default TopicTableItem;
