import HomePage from './HomePage';
import ContactPage from './ContactPage';
import AjustementEcran from "./components/AjustementEcran.jsx";
import {useState} from "react";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";

function App() {
    const { width } = AjustementEcran();

    const containerStyle = {
        width: width < 480 ? "100%" : width < 768 ? "90%" : "80%",
        margin: "0 auto",
        padding: "20px",
    };

    const [activePage, setActivePage] = useState("home");

    const changePage = (page) => {
        setActivePage(page);
    };

    const renderPage = () => {
        switch (activePage) {
            case "contact":
                return <ContactPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <>
            <Header changePage={changePage} />
            {renderPage()}
        </>
    );
    }

            export default App;


