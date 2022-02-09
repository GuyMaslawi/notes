import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from "../button/Button";
import Note from "../note/Note";
import "./NotesList.scss";
import {handleModal} from "../../redux/notesSlice";

const NotesList = () => {
    const {list} = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    const renderList = useCallback(() => {
        return list.map((item) => (
            <Note key={item.id} data={item} />
        ));
    }, [list]);

    const handleAddNote = () => dispatch(handleModal(true));

    return (
        <div className="notes-list">
            {list.length > 0 ? (
                renderList()
            ) : (
                <div className="empty-list">
                    <div className="empty-list-text">Your list is empty</div>
                    <Button onClick={handleAddNote}>Add Note</Button>
                </div>
            )}
        </div>
    );
};

export default NotesList;
