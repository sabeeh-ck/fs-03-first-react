import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <main>
        <Header />
        <Main />
        <Footer />
    </main>
);

function Header() {
    return (
        <header>
            <img src="public\vite.svg" alt="Logo" />
        </header>
    );
}

function Main() {
    return (
        <main>
            <h1>Reasons I'm excited to learn React!</h1>
            <ul>
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
            </ul>
        </main>
    );
}

function Footer() {
    return <footer>© 20xx CK development. All rights reserved.</footer>;
}
