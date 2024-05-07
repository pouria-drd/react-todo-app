import { useParams } from "react-router-dom";
import { useTopicContext } from "../context/TopicContext";

import TasksTable from "../components/tasks/TasksTable";
import TopicDetailHeader from "../components/headers/TopicDetailHeader";

function TopicDetailPage() {
    const { id } = useParams();

    const { topics } = useTopicContext();

    const topic: Topic | undefined = topics.find((topic) => topic?.id === id);

    return (
        <div className="flex flex-col items-center gap-4">
            <TopicDetailHeader topic={topic} />

            {topic && <TasksTable topic={topic} />}
        </div>
    );
}

export default TopicDetailPage;
