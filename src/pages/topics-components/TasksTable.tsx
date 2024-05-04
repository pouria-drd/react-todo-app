import TasksTableItem from "./TasksTableItem";

interface TasksTableProps {
    topic: Topic;
}

const TasksTable = ({ topic }: TasksTableProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {topic.tasks &&
                topic.tasks
                    .map((task, index) => (
                        <TasksTableItem task={task} key={index} />
                    ))
                    .reverse()}
        </div>
    );
};

export default TasksTable;
