import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import Routes from "./routing/Routing";
import "./App.scss";

const App = () => {
  const { isModalOpen } = useSelector((state) => state.notes);
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";

  return (
    <div>
      {!isAuthPage && <Header title="Notes List" />}
      {!isAuthPage && <div className="user">Hello, user</div>}

      <Routes />
      <Modal open={isModalOpen} />
    </div>
  );
};

export default App;
