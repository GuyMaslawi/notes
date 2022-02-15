import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import Routes from "./routing/Routing";
import {setAuthToken} from "./utils/setAuthToken";
import "./App.scss";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    const {isModalOpen} = useSelector((state) => state.notes);
    const location = useLocation();
    const isAuthPage = location.pathname === "/auth";

    return (
        <div>
            {!isAuthPage && <Header title="Notes List"/>}
            <Routes/>
            {isModalOpen && <Modal/>}
        </div>
    );
};

export default App;
