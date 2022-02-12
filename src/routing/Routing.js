import { Route, Routes } from "react-router-dom";
import Authentication from "../views/authentication/Authentication";
import Details from "../views/details/Details";
import ErrorPage from "../views/error-page/ErrorPage";
import NotesList from "../views/notes-list/NotesList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact element={<NotesList />} />
      <Route path="note-details" element={<Details />} />
      <Route path="auth" element={<Authentication />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Routing;
