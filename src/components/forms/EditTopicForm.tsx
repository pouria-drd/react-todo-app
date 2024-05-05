import { useState } from "react";
import { useTopicContext } from "../../context/TopicContext";

import Modal from "../modal/Modal";
import Input from "../custom-ui/input/Input";
import Button from "../custom-ui/button/Button";

interface EditTopicForm {
    topicToEdit: Topic;
    openTopicForm: boolean;
    onClose: () => void;
}

const EditTopicForm = (editTopicForm: EditTopicForm) => {
    const { updateTopic } = useTopicContext();

    const [topicData, setTopicData] = useState<Topic>(
        editTopicForm.topicToEdit
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTopicData((prevTopicData) => ({
            ...prevTopicData,
            name: value,
        }));
    };

    const handleEditTopic = () => {
        updateTopic(topicData);

        // Close the modal
        editTopicForm.onClose();
    };

    return (
        <Modal
            title={`Edit Topic ${editTopicForm.topicToEdit.name}`}
            isOpen={editTopicForm.openTopicForm}
            onClose={editTopicForm.onClose}>
            <div className="flex flex-col items-start justify-start gap-4 w-full">
                <Input
                    placeholder="Topic Name"
                    value={topicData.name}
                    onChange={handleInputChange}
                />
                <Button
                    onClick={handleEditTopic}
                    disabled={topicData.name.length < 3}>
                    Edit
                </Button>
            </div>
        </Modal>
    );
};

export default EditTopicForm;
