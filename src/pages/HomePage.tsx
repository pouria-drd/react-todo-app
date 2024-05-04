import { useTopicContext } from "../context/TopicContext";

import TopicsTable from "./topic-components/TopicsTable";
import HomeHeader from "../components/headers/HomeHeader";

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
