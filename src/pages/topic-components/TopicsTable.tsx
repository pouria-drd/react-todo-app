import TopicTableItem from "./TopicTableItem";

interface TopicTableProps {
    topics: Topic[];
}

const TopicsTable = ({ topics }: TopicTableProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {topics
                .map((topic, index) => (
                    <TopicTableItem topic={topic} key={index} />
                ))
                .reverse()}
        </div>
    );
};

export default TopicsTable;
