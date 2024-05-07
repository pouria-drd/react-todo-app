import { useState } from "react";
import { useTopicContext } from "../../context/TopicContext";

import Modal from "../modal/Modal";
import Input from "../custom-ui/input/Input";
import Button from "../custom-ui/button/Button";

interface EditTaskFormProps {
    taskToEdit: Task;
    openTaskForm: boolean;
    onClose: () => void;
}

const EditTaskForm = (editTaskFormProps: EditTaskFormProps) => {
    const { updateTask } = useTopicContext();

    const [taskData, setTaskData] = useState<Task>(
        editTaskFormProps.taskToEdit
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTaskData((prevTopicData) => ({
            ...prevTopicData,
            detail: value,
        }));
    };

    const handleEditTask = () => {
        updateTask(taskData);

        // Close the modal
        editTaskFormProps.onClose();
    };

    return (
        <Modal
            title={`Edit Topic ${editTaskFormProps.taskToEdit.detail}`}
            isOpen={editTaskFormProps.openTaskForm}
            onClose={editTaskFormProps.onClose}>
            <div className="flex flex-col items-start justify-start gap-4 w-full">
                <Input
                    placeholder="Type your task ..."
                    value={taskData.detail}
                    onChange={handleInputChange}
                />
                <Button
                    onClick={handleEditTask}
                    disabled={taskData.detail.length < 3}>
                    Edit
                </Button>
            </div>
        </Modal>
    );
};

export default EditTaskForm;
