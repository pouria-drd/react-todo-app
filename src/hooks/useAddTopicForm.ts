import { useState } from "react";
import { useTopicContext } from "../context/TopicContext";
import generateRandomId from "../utils/generateRandomId";

const useAddTopicForm = () => {
    const { addTopic } = useTopicContext();

    const [topicData, setTopicData] = useState<Topic>({
        id: "",
        name: "",
        createdAt: new Date(),
        tasks: [],
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTopicData((prevTopicData) => ({
            ...prevTopicData,
            name: value,
        }));
    };

    const addNewTopic = () => {
        const newId = `topic-${generateRandomId()}`;

        // Create the new topic object
        const newTopic = {
            id: newId,
            name: topicData.name,
            createdAt: new Date(),
            tasks: [],
        };

        addTopic(newTopic);
    };

    return {
        topicData,
        addNewTopic,
        handleInputChange,
    };
};

export default useAddTopicForm;
