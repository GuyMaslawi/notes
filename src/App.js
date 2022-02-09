import {useSelector} from "react-redux";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import Routes from "./routing/Routing";
import "./App.scss";

const App = () => {
    const {isModalOpen} = useSelector((state) => state.notes);

    return (
        <div>
            <Header title="Notes List"/>
            <Routes/>
            <Modal open={isModalOpen}/>
        </div>
    );
};

export default App;
