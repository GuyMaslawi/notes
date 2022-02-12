import "./Button.scss";

const Button = ({ children, onClick, isLink = false, type }) => {
  return type === "submit" ? (
    <input className="button" type="submit" value={children} />
  ) : (
    <button className={isLink ? "link" : "button"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
