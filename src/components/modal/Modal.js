import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/notesSlice";
import Button from "../button/Button";
import Input from "../input/Input";
import "./Modal.scss";

const Modal = ({ open, onClose, isDelete = false }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleTitle = (e) => setTitle(e.target.value);

  const handleDescription = (e) => setDescription(e.target.value);

  const handleAddItem = () => {
    const obj = { title, description };
    dispatch(addItem(obj));
    onClose();
  };

  const currentTitle = isDelete ? "Delete Note" : "New Note";

  return open ? (
    <div className="modal">
      <div className="content">
        <div className="close-button" onClick={onClose}>
          X
        </div>
        <div className="title">{currentTitle}</div>
        {isDelete ? (
          <div>
            <Input
              placeholder="Title"
              onChange={(e) => handleTitle(e)}
              value={title}
            />
            <Input
              placeholder="Description"
              onChange={(e) => handleDescription(e)}
              value={description}
            />
            <Button onClick={handleAddItem}>Add</Button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  ) : null;
};

export default Modal;
