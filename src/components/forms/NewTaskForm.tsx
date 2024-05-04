import Modal from "../modal/Modal";
import Input from "../custom-ui/input/Input";
import Button from "../custom-ui/button/Button";
import useAddTaskForm from "../../hooks/useAddTaskForm";

interface NewTaskFormProps {
    topicId: string;
    openTopicForm: boolean;
    onClose: () => void;
}

const NewTaskForm = (newTaskFormProps: NewTaskFormProps) => {
    const { taskData, addNewTask, handleInputChange } = useAddTaskForm();

    const handleAddTopic = () => {
        addNewTask(newTaskFormProps.topicId);

        // Close the modal
        newTaskFormProps.onClose();
    };

    return (
        <Modal
            title="New Task"
            isOpen={newTaskFormProps.openTopicForm}
            onClose={newTaskFormProps.onClose}>
            <div className="flex flex-col items-start justify-start gap-4 w-full">
                <Input
                    placeholder="New Task..."
                    value={taskData.detail}
                    onChange={handleInputChange}
                />
                <Button
                    onClick={handleAddTopic}
                    disabled={taskData.detail.length < 3}>
                    Add Task
                </Button>
            </div>
        </Modal>
    );
};

export default NewTaskForm;
