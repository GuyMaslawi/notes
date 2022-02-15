import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import {REGISTER_INPUTS} from "../../../constants/index";
import api from "../../../axios/api";
import {setAuthFail, setAuthSuccess} from "../../../redux/authSlice";
import {resetMessages, setErrors, setSuccess} from "../../../redux/errorsSlice";

const Register = () => {
    const {register, handleSubmit} = useForm();
    const {errors, success} = useSelector(state => state.errors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetMessages());
    }, [dispatch]);

    const onSubmit = async (data) => {
        if (data.password !== data.passwordRepeat) {
            setErrors("passwords do not match!");
        } else {
            const {name, email, password} = data;

            const newUser = {
                name,
                email,
                password,
            };

            const body = JSON.stringify(newUser);

            try {
                const res = await api.post("/users/create_user", body);
                dispatch(setSuccess('Registration Successful!'));
                dispatch(setAuthSuccess(res.data));
            } catch (err) {
                dispatch(setErrors(err.response.data.errors));
                dispatch(setAuthFail());
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

    const renderErrors = errors?.map((item, index) => {
        return (
            <div key={index}
                 className="error-text">
                {item.msg}
            </div>
        )
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="success-text">{success}</div>
            {renderErrors}
            {renderInputs}
            <div className="action">
                <Button type="submit">Register</Button>
            </div>
        </form>
    );
};

export default Register;
