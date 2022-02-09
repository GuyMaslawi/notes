import { useSelector } from "react-redux";
import Button from "../button/Button";
import "./Header.scss";

const Header = ({ title }) => {
  const { list } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      {list.length > 0 && <Button onClick={dispatch(openModal())}>Add</Button>}
    </div>
  );
};

export default Header;
