import { useState } from "react";
import { useTopicContext } from "../../context/TopicContext";

import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import EditTaskForm from "../../components/forms/EditTaskForm";
import CheckButton from "../../components/custom-ui/checkButton/CheckButton";

interface TasksTableItemProps {
    task: Task;
}

const TasksTableItem = ({ task }: TasksTableItemProps) => {
    const { updateTask, deleteTask } = useTopicContext();

    const [openEditTaskForm, setOpenEditTaskForm] = useState<boolean>(false);

    const handleComplete = () => {
        updateTask({ ...task, isComplete: !task.isComplete });
    };

    const handleTaskDelete = () => {
        const confirmed = confirm(
            `Do you really want to delete ${task.detail}?`
        );

        if (!confirmed) return;
        else {
            deleteTask(task.id, task.topicId);
        }
    };

    return (
        <>
            <div
                className={`flex items-center justify-between gap-2 border border-indigo-500 rounded p-4 ${
                    task.isComplete ? "line-through" : ""
                }`}>
                <p className="text-nowrap overflow-hidden">{task.detail}</p>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleTaskDelete}
                        className="text-rose-400">
                        <DeleteIcon />
                    </button>
                    <button
                        onClick={() => setOpenEditTaskForm(true)}
                        className="text-blue-400">
                        <EditIcon />
                    </button>
                    <CheckButton
                        defaultValue={task.isComplete}
                        onClick={handleComplete}
                    />
                </div>
            </div>

            {openEditTaskForm && (
                <EditTaskForm
                    taskToEdit={task}
                    openTaskForm={openEditTaskForm}
                    onClose={() => setOpenEditTaskForm(false)}
                />
            )}
        </>
    );
};

export default TasksTableItem;
