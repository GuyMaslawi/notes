import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItem, deleteItem, editItem, handleModal} from "../../redux/notesSlice";
import {MODAL_TYPE} from "../../constants/index";
import Button from "../button/Button";
import Input from "../input/Input";
import "./Modal.scss";

const Modal = ({open}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const {modalType, currentNote} = useSelector(state => state.notes);

    const handleTitle = (e) => setTitle(e.target.value);

    const handleDescription = (e) => setDescription(e.target.value);

    const handleCloseModal = _ => dispatch(handleModal(false));

    const handleAddItem = () => {
        const obj = {title, description};
        dispatch(addItem(obj));
        handleCloseModal();
    };

    const handleEditItem = _ => {
        const id = currentNote.id;
        const obj = {id, title, description};
        dispatch(editItem(obj));
        dispatch(handleModal(false));
    };

    const handleDeleteItem = _ => dispatch(deleteItem(currentNote.id))

    const currentTitle = modalType === MODAL_TYPE.DELETE ? "Delete Note" : "New Note";

    return open ? (
        <div className="modal">
            <div className="content">
                <div className="close-button" onClick={handleCloseModal}>
                    X
                </div>
                <div className="title">{currentTitle}</div>
                {modalType === MODAL_TYPE.ADD | modalType === MODAL_TYPE.EDIT &&
                <div>
                    <Input
                        placeholder="Title"
                        onChange={(e) => handleTitle(e)}
                        value={title}
                    />
                    <Input
                        placeholder="Description"
                        onChange={(e) => handleDescription(e)}
                        value={description}
                        multiline
                    />
                    <div className="button-wrapper">
                        <Button onClick={modalType === MODAL_TYPE.EDIT ? handleEditItem : handleAddItem}>
                            {modalType === MODAL_TYPE.EDIT ? 'Save' : 'Add'}
                        </Button>
                    </div>
                </div>
                }

                {modalType === MODAL_TYPE.DELETE &&
                <div>
                    <div>Are you sure you want to delete this note?</div>
                    <div className="button-wrapper">
                        <Button onClick={handleDeleteItem}>Delete</Button>
                        <Button onClick={handleCloseModal} isLink>Cancel</Button>
                    </div>
                </div>
                }
            </div>
        </div>
    ) : null;
};

export default Modal;
