import "./Note.scss";

const Note = ({ data, setOpenModal }) => {

  const handleDelete = () => {
    setOpenModal(true)
  }
  return (
    <div className="wrapper">
      <div className="icons">
        <span className="material-icons md-36 delete" onClick={handleDelete}>delete</span>
        <span className="material-icons md-36 edit">edit</span>
      </div>
      <div className="content">
        <div className="title">{data.title}</div>
        <div className="description">{data.description}</div>
      </div>
    </div>
  );
};

export default Note;
