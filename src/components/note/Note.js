import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {handleModal, setCurrentNote} from "../../redux/notesSlice";
import {MODAL_TYPE} from "../../constants/index";
import "./Note.scss";

const Note = ({data}) => {
    const dispatch = useDispatch();


    const handleCurrentNote = _ => dispatch(setCurrentNote(data));

    const handleNote = (type) => {
        handleCurrentNote();
        dispatch(handleModal(type));
    };

    return (
        <div className="wrapper">
            <div className="icons">
                <span className="material-icons md-36 delete"
                      onClick={() => handleNote(MODAL_TYPE.DELETE)}>delete</span>
                <span className="material-icons md-36 edit" onClick={() => handleNote(MODAL_TYPE.EDIT)}>edit</span>
            </div>
            <div className="content">
                <div className="title">{data.title}</div>
                <div className="description">{data.description}</div>

                {data.description.length > 80 &&
                <Link
                    style={{textDecoration: 'none'}}
                    to="note-details"
                    onClick={handleCurrentNote}
                    key={data.id}>
                    Read More
                </Link>
                }
            </div>
        </div>
    );
};

export default Note;
