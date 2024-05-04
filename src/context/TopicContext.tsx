import { useState, useEffect, useContext, createContext } from "react";

interface TopicContextProps {
    topics: Topic[];
    addTopic: (newTopic: Topic) => void;
}

// Create the context with an initial empty array as the default value
const TopicContext = createContext<TopicContextProps>({
    topics: [],
    addTopic: () => {},
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

    // Save topics to local storage whenever they change
    useEffect(() => {
        localStorage.setItem(topicsLabel, JSON.stringify(topics));
    }, [topics]);

    return (
        <TopicContext.Provider value={{ topics, addTopic }}>
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
