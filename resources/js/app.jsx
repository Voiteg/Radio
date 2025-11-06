import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login.jsx";
import Rejestracja from "./components/Rejestracja.jsx";

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <Rejestracja></Rejestracja>
    </React.StrictMode>
);