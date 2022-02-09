import "./Button.scss";

const Button = ({children, onClick, isLink = false}) => {
    return (
        <button className={isLink ? "link" : "button"} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
