import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../button/Button";
import {handleModal} from "../../redux/notesSlice";
import {MODAL_TYPE} from "../../constants/index";
import {setAuthFail} from "../../redux/authSlice";
import "./Header.scss";

const Header = ({title}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isListPage = location.pathname === "/notes-list";

    const handleAddNote = () => dispatch(handleModal(MODAL_TYPE.ADD));

    const handleLogout = () => {
        dispatch(setAuthFail());
        navigate('/auth')
    };

    return (
        <div className="header">
            <div className="content">
                <h1 className="title">{title}</h1>
                {isListPage && <Button onClick={handleAddNote}>Add</Button>}
                <button className="log-out-button" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Header;
