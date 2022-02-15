import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import {handleModal, setCurrentNote} from "../../redux/notesSlice";
import {MODAL_TYPE} from "../../constants/index";
import "./Note.scss";

const Note = ({data}) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const isDetailsPage = location.pathname.includes("/note/");

    const handleCurrentNote = useCallback(() => {
        dispatch(setCurrentNote(data));
    }, [data, dispatch]);

    const handleNote = useCallback((type) => {
        handleCurrentNote();
        dispatch(handleModal(type));
    }, [dispatch, handleCurrentNote]);

    return (
        <div className="wrapper">
            <div className={isDetailsPage ? "content full-details" : "content"}>
                <div className="delete-button">
                    <span className="material-icons md-36 delete"
                          onClick={() => handleNote(MODAL_TYPE.DELETE)}>delete</span>
                </div>
                <div className="title">{data.title}</div>
                <div className={isDetailsPage ? "description" : "description hidden"}>{data.description}</div>

                {data.description?.length > 80 && !isDetailsPage &&
                <Link
                    style={{textDecoration: 'none'}}
                    to={`/note/${data._id}`}
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
