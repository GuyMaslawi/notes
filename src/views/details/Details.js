import {useSelector} from "react-redux";
import Loader from "../../components/loader/Loader";
import Note from "../../components/note/Note";
import './Details.scss';

const Details = () => {
    const {loading, currentNote} = useSelector(state => state.notes);

    return (
        loading ?
            <Loader/>
            :
            <div className="details">
                <Note data={currentNote}/>
            </div>
    );
};

export default Details;
