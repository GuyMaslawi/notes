import {Route} from "react-router-dom";
import Details from "../views/details/Details";
import ErrorPage from "../views/error-page/ErrorPage";
import NotesList from "../views/notes-list/NotesList";

const Routes = () => {
    return (
        <Routes>
            <Route path="/" element={<NotesList/>}/>
            <Route path="note-details" element={<Details/>}/>
            <Route path="**" element={<ErrorPage/>}/>
        </Routes>
    );
};

export default Routes;
