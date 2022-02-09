import {useDispatch} from "react-redux";
import Button from "../button/Button";
import {handleModal} from "../../redux/notesSlice";
import {MODAL_TYPE} from "../../constants/index";
import "./Header.scss";

const Header = ({title}) => {
    const dispatch = useDispatch();

    const handleAddNote = () => dispatch(handleModal(MODAL_TYPE.ADD));

    return (
        <div className="header">
            <div className="content">
                <h1 className="title">{title}</h1>
                <Button onClick={handleAddNote}>Add</Button>
            </div>
        </div>
    );
};

export default Header;
