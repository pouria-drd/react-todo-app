import { useState, useEffect } from "react";
import TasksTableItem from "./TasksTableItem";

interface TasksTableProps {
    topic: Topic;
}

const TasksTable = ({ topic }: TasksTableProps) => {
    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
    const [incompleteTasks, setIncompleteTasks] = useState<Task[]>([]);

    useEffect(() => {
        const completed = topic.tasks
            ? topic.tasks.filter((task) => task.isComplete).reverse()
            : [];
        const incomplete = topic.tasks
            ? topic.tasks.filter((task) => !task.isComplete).reverse()
            : [];

        setCompletedTasks(completed);
        setIncompleteTasks(incomplete);
    }, [topic]);

    return (
        <div className="flex flex-col gap-4 w-full h-full">
            {incompleteTasks.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                    {incompleteTasks.map((task, index) => (
                        <TasksTableItem task={task} key={task.id + index} />
                    ))}
                </div>
            )}

            {completedTasks.length > 0 && (
                <>
                    <h1 className="cursor-default text-xl sm:text-2xl">
                        Completed
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                        {completedTasks.map((task, index) => (
                            <TasksTableItem task={task} key={task.id + index} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default TasksTable;
