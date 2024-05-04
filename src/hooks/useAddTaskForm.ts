import { useState } from "react";

import { useTopicContext } from "../context/TopicContext";
import generateRandomId from "../utils/generateRandomId";

const useAddTaskForm = () => {
    const { addTask } = useTopicContext();

    const [taskData, setTaskData] = useState<Task>({
        id: "",
        detail: "",
        topicId: "",
        isComplete: false,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTaskData((prevTopicData) => ({
            ...prevTopicData,
            detail: value,
        }));
    };

    const addNewTask = (topicId: string) => {
        const newId = `task-${generateRandomId()}`;

        // Create the new topic object
        const newTask: Task = {
            id: newId,
            topicId: topicId,
            isComplete: false,
            detail: taskData.detail,
        };

        addTask(newTask);
    };

    return {
        taskData,
        addNewTask,
        handleInputChange,
    };
};

export default useAddTaskForm;
