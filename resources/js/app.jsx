import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login.jsx";
import Rejestracja from "./components/Rejestracja.jsx";

function App() {
  const [pokazLogin, setPokazLogin] = useState(true);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      {pokazLogin ? (
        <Login onSwitch={() => setPokazLogin(false)} />
      ) : (
        <Rejestracja onSwitch={() => setPokazLogin(true)} />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
