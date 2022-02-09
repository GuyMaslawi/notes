import './Input.scss';

const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
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
