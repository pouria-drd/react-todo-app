import { useParams } from "react-router-dom";

function TopicDetailPage() {
    const { id } = useParams();

    return <div>TopicDetailPage {id}</div>;
}

export default TopicDetailPage;
