import {useCallback, useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {handleModal} from "../../redux/notesSlice";
import {MODAL_TYPE, ADD_NOTE_INPUTS} from "../../constants/index";
import Button from "../button/Button";
import Input from "../input/Input";
import api from "../../axios/api";
import {resetMessages, setErrors, setSuccess} from "../../redux/errorsSlice";
import "./Modal.scss";
import {useNavigate} from "react-router-dom";

const Modal = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {modalType, currentNote} = useSelector(state => state.notes);
    const {user} = useSelector(state => state.auth);
    const {errors, success} = useSelector(state => state.errors);

    useEffect(() => {
        dispatch(resetMessages());
    }, [dispatch]);

    const onSubmit = useCallback(async (data) => {
        try {
            const {title, description} = data;
            await api.post('/notes/create', {user, title, description});
            handleCloseModal();
        } catch (err) {
            dispatch(setErrors(err.response.data.errors));
        }
    }, [user]);

    const currentTitle = useMemo(() => {
        return modalType === MODAL_TYPE.DELETE ? "Delete Note" : "New Note"
    }, [modalType]);

    const handleCloseModal = _ => dispatch(handleModal(false));

    const handleDeleteNote = async () => {
        try {
            navigate('/notes-list');
            await api.delete(`/notes/delete/${currentNote._id}`);
            localStorage.removeItem('currentNote');
            dispatch(setSuccess('Note deleted!'));
            handleCloseModal();
        } catch (err) {
            dispatch(setErrors(err.response.data.errors));
        }
    };

    const renderInputs = ADD_NOTE_INPUTS.map((item) => {
        return (
            <Input
                key={item.id}
                type={item.type}
                {...register(item.register)}
                placeholder={item.placeholder}
            />
        );
    });

    const renderErrors = errors?.map((item, index) => {
        return (
            <div key={index}
                 className="error-text">
                {item.msg}
            </div>
        )
    });

    return (
        <div className="modal">
            <div className="content">
                <div className="close-button" onClick={handleCloseModal}>
                    X
                </div>
                <div className="title">{currentTitle}</div>
                {success}
                {renderErrors}
                {modalType === MODAL_TYPE.ADD &&
                <form onSubmit={handleSubmit(onSubmit)}>
                    {renderInputs}
                    <div className="button-wrapper">
                        <Button type="submit">Add</Button>
                    </div>
                </form>
                }

                {modalType === MODAL_TYPE.DELETE &&
                <div className="delete-content">
                    <div className="delete-content-title">Are you sure you want to delete this note?</div>
                    <div className="delete-content-buttons">
                        <Button onClick={handleDeleteNote}>Delete</Button>
                        <Button onClick={handleCloseModal} isLink className="cancel-button">Cancel</Button>
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default Modal;
