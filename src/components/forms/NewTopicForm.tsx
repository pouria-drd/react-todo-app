import { useId, useState } from "react";
import { useTopicContext } from "../../context/TopicContext";

import Modal from "../modal/Modal";
import Input from "../custom-ui/input/Input";
import Button from "../custom-ui/button/Button";

interface NewTopicFormProps {
    openTopicForm: boolean;
    onClose: () => void;
}

const NewTopicForm: React.FC<NewTopicFormProps> = (newTopicFormProps) => {
    const uniqueID = `topic-${useId()}`;
    const { addTopic } = useTopicContext(); // Use the addTopic function from context

    const [topicData, setTopicData] = useState<Topic>({
        id: "", // Initialize with an empty ID
        name: "",
        createdAt: new Date(), // Initialize with the current timestamp
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTopicData((prevTopicData) => ({
            ...prevTopicData,
            name: value,
        }));
    };

    const handleAddTopic = () => {
        // Generate a unique ID
        const newId = uniqueID;

        // Create the new topic object
        const newTopic = {
            id: newId,
            name: topicData.name,
            createdAt: new Date(),
        };

        // Add the new topic using the context function
        addTopic(newTopic);

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
