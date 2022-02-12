import { useSelector } from "react-redux";

const Alert = () => {
  const {
    alert: { type, msg },
  } = useSelector((state) => state.alerts);

  return (
    <div className={`alert alert-${type}`}>
      <span>{msg}</span>
    </div>
  );
};

export default Alert;
