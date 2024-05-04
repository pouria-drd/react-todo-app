import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { TopicProvider } from "./context/TopicContext.tsx";

import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <TopicProvider>
                <App />
            </TopicProvider>
        </BrowserRouter>
    </React.StrictMode>
);
