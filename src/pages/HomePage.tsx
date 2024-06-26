import { useTopicContext } from "../context/TopicContext";

import HomeHeader from "../components/headers/HomeHeader";
import TopicsTable from "../components/topics/TopicsTable";

function HomePage() {
    const { topics } = useTopicContext();

    return (
        <div className="flex flex-col items-center gap-4">
            <HomeHeader />

            <TopicsTable topics={topics} />
        </div>
    );
}

export default HomePage;
