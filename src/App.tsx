import "./assets/styles/App.css";
import AppRoutes from "./router/AppRoutes";
import Navbar from "./components/navbar/Navbar";
import PageLayout from "./components/layouts/PageLayout";

function App() {
    return (
        <main className="flex flex-col h-svh">
            <Navbar />
            <PageLayout>
                <AppRoutes />
            </PageLayout>
        </main>
    );
}

export default App;
