import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
    return (
        <>
            <Navbar />
            <Main />
        </>
    );
}
