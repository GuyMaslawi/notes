import {useSelector} from "react-redux";
import './Details.scss';

const Details = () => {
    const {currentNote} = useSelector(state => state.notes);

    return (
        <div className="details">
            <h2 className="title">
                {currentNote?.title}
            </h2>
            <div className="description">
                {currentNote?.description}
            </div>
        </div>
    );
};

export default Details;
