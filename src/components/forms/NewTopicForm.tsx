import Modal from "../modal/Modal";
import Input from "../custom-ui/input/Input";
import Button from "../custom-ui/button/Button";
import useAddTopicForm from "../../hooks/useAddTopicForm";

interface NewTopicFormProps {
    openTopicForm: boolean;
    onClose: () => void;
}

const NewTopicForm = (newTopicFormProps: NewTopicFormProps) => {
    const { topicData, addNewTopic, handleInputChange } = useAddTopicForm();

    const handleAddTopic = () => {
        addNewTopic();

        // Close the modal
        newTopicFormProps.onClose();
    };

    return (
        <Modal
            title="New Topic"
            isOpen={newTopicFormProps.openTopicForm}
            onClose={newTopicFormProps.onClose}>
            <div className="flex flex-col items-start justify-start gap-4 w-full">
                <Input
                    placeholder="Topic Name"
                    value={topicData.name}
                    onChange={handleInputChange}
                />
                <Button onClick={handleAddTopic}>Add Topic</Button>
            </div>
        </Modal>
    );
};

export default NewTopicForm;
