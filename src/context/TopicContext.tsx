import { useState, useEffect, useContext, createContext } from "react";

interface TopicContextProps {
    topics: Topic[];
    addTask: (newTask: Task) => void;
    updateTask: (updatedTask: Task) => void;

    addTopic: (newTopic: Topic) => void;
    deleteTopic: (topicId: string) => void;
    updateTopic: (updatedTopic: Topic) => void;
}

// Create the context with an initial empty array as the default value
const TopicContext = createContext<TopicContextProps>({
    topics: [],
    addTask: () => {},
    updateTask: () => {},

    addTopic: () => {},
    updateTopic: () => {},
    deleteTopic: () => {},
});

interface TopicProviderProps {
    children: React.ReactNode;
}

const topicsLabel = "topics";

// Create a provider component
export const TopicProvider = ({ children }: TopicProviderProps) => {
    const [topics, setTopics] = useState<Topic[]>([]);

    // Retrieve existing topics from local storage (if any)
    useEffect(() => {
        const storedTopics = localStorage.getItem(topicsLabel);
        if (storedTopics) {
            setTopics(JSON.parse(storedTopics));
        }
    }, []);

    // Add a new topic
    const addTopic = (newTopic: Topic) => {
        setTopics((prevTopics) => [...prevTopics, newTopic]);
    };

    // Update topic name
    const updateTopic = (updatedTopic: Topic) => {
        setTopics((prevTopics) => {
            return prevTopics.map((topic) => {
                if (topic.id === updatedTopic.id) {
                    return {
                        ...topic,
                        name: updatedTopic.name,
                    };
                } else {
                    return topic;
                }
            });
        });
    };

    // Delete a topic
    const deleteTopic = (topicId: string) => {
        setTopics((prevTopics) => {
            return prevTopics.filter((topic) => topic.id !== topicId);
        });
    };

    // Add a new task
    const addTask = (newTask: Task) => {
        setTopics((prevTopics) => {
            return prevTopics.map((topic) => {
                if (topic.id === newTask.topicId) {
                    return {
                        ...topic,
                        tasks: [...(topic.tasks || []), newTask],
                    };
                } else {
                    return topic;
                }
            });
        });
    };

    // Update a task
    const updateTask = (updatedTask: Task) => {
        setTopics((prevTopics) => {
            return prevTopics.map((topic) => {
                if (topic.id === updatedTask.topicId) {
                    return {
                        ...topic,
                        tasks: topic.tasks?.map((task) =>
                            task.id === updatedTask.id ? updatedTask : task
                        ),
                    };
                } else {
                    return topic;
                }
            });
        });
    };

    // Save topics to local storage whenever they change
    useEffect(() => {
        localStorage.setItem(topicsLabel, JSON.stringify(topics));
    }, [topics]);

    return (
        <TopicContext.Provider
            value={{
                topics,
                addTask,
                updateTask,

                addTopic,
                updateTopic,
                deleteTopic,
            }}>
            {children}
        </TopicContext.Provider>
    );
};

// Custom hook to consume the context
export const useTopicContext = () => {
    const context = useContext(TopicContext);
    if (!context)
        throw new Error("useTopicContext must be used within a TopicProvider");
    return context;
};
