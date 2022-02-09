import './Input.scss';

const Input = ({
                   type = "text",
                   placeholder,
                   value,
                   onChange,
                   multiline = false
               }) => {
    return (
        multiline ?
            <textarea value={value}
                      className="input textarea"
                      onChange={onChange}
                      placeholder={placeholder}
            />
            :
            <input
                type={type}
                className="input"
                onChange={onChange}
                value={value || ''}
                placeholder={placeholder}
            />
    );
};

export default Input;
