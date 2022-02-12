import { useForm } from "react-hook-form";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { REGISTER_INPUTS } from "../../../constants/index";
import api from "../../../axios/api";
import { setAlert } from "../../../redux/alertsSlice";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.passwordRepeat) {
      setAlert('danger', "passwords do not match!");
    } else {
      const { name, email, password } = data;

      const newUser = {
        name,
        email,
        password,
      };

      const body = JSON.stringify(newUser);

      try {
        const res = await api.post("/users/create_user", body);
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  const renderInputs = REGISTER_INPUTS.map((item) => {
    return (
      <Input
        key={item.id}
        type={item.type}
        {...register(item.register)}
        placeholder={item.placeholder}
      />
    );
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderInputs}
      <div className="action">
        <Button type="submit">Register</Button>
      </div>
    </form>
  );
};

export default Register;
