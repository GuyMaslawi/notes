import {useSelector} from "react-redux";
import Note from "../../components/note/Note";
import "./NotesList.scss";

const NotesList = () => {
    const {list} = useSelector((state) => state.notes);

    return (
        <div className="notes-list">
            {list.length > 0 ? (
                list.map((item) => (
                    <Note key={item.id} data={item}/>
                ))
            ) : (
                <div className="empty-list-text">Your list is empty</div>
            )}
        </div>
    );
};

export default NotesList;
