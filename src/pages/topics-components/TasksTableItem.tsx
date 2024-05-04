import { useTopicContext } from "../../context/TopicContext";
import CheckButton from "../../components/custom-ui/checkButton/CheckButton";

interface TasksTableItemProps {
    task: Task;
}

const TasksTableItem = ({ task }: TasksTableItemProps) => {
    const { updateTask } = useTopicContext();

    const handleComplete = () => {
        updateTask({ ...task, isComplete: !task.isComplete });
    };

    return (
        <div
            className={`flex items-center justify-between gap-2 border border-indigo-500 rounded p-4 ${
                task.isComplete ? "line-through" : ""
            }`}>
            {task.detail}
            <CheckButton onClick={handleComplete} />
        </div>
    );
};

export default TasksTableItem;
