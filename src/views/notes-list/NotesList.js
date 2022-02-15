import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Note from "../../components/note/Note";
import {fetchNotes} from "../../redux/notesSlice";
import "./NotesList.scss";
import Loader from "../../components/loader/Loader";

const NotesList = () => {
    const {loading, list} = useSelector((state) => state.notes);
    const {user} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNotes(user));
    }, [dispatch, user]);

    return (
        loading ?
            <Loader/>
            :
            <div className="notes-list">
                {list.length > 0 ?
                    list.map((item) => <Note key={item._id} data={item}/>)
                    :
                    <div className="empty-list-text">Your list is empty</div>
                }
            </div>

    );
};

export default NotesList;
