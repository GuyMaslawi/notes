import {Navigate, Route, Routes} from "react-router-dom";
import Authentication from "../views/authentication/Authentication";
import Details from "../views/details/Details";
import NotesList from "../views/notes-list/NotesList";

const Routing = () => {
    return (
        <Routes>
            <Route path="auth" element={<Authentication/>}/>
            <Route path="/notes-list" element={<NotesList/>}/>
            <Route path="/note/:id" element={<Details/>}/>}
            <Route path="*" element={<Navigate to="auth" />}/>
        </Routes>
    );
};

export default Routing;
