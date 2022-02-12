import { useForm } from "react-hook-form";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { INPUTS } from "../../../constants";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const renderInputs = INPUTS.map((item) => {
    return (
      <Input
        key={item.id}
        type={item.type}
        {...register(item.register)}ƒ
        placeholder={item.placeholder}
      />
    );
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderInputs}
      <div className="action">
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default Login;
