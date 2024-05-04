import { ROUTES } from "./routes";
import { Route, Routes } from "react-router-dom";

import { HomePage, NotFoundPage, TopicDetailPage } from "../pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.NOT_FOUND_ROUTE} element={<NotFoundPage />} />

            <Route
                path={ROUTES.Topic_Detail_Route + ":id"}
                element={<TopicDetailPage />}
            />
        </Routes>
    );
};

export default AppRoutes;
