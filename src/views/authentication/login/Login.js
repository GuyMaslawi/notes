import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import api from "../../../axios/api";
import {setAuthSuccess, setAuthFail} from "../../../redux/authSlice";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import {INPUTS} from "../../../constants";
import {resetMessages, setErrors, setSuccess} from "../../../redux/errorsSlice";

const Login = () => {
    const {register, handleSubmit} = useForm();
    const {errors, success} = useSelector(state => state.errors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetMessages());
    }, [dispatch]);

    const onSubmit = useCallback(async (data) => {
        const {email, password} = data;

        const user = {
            email,
            password,
        };

        const body = JSON.stringify(user);

        try {
            const res = await api.post("/auth/login", body);
            dispatch(setSuccess('Login Successful!'));
            dispatch(setAuthSuccess(res.data));
        } catch (err) {
            dispatch(setErrors(err.response.data.errors));
            dispatch(setAuthFail());
        }
    }, [dispatch]);

    const renderInputs = INPUTS.map((item) => {
        return (
            <Input
                key={item.id}
                type={item.type}
                {...register(item.register)} ƒ
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
                <Button type="submit">Login</Button>
            </div>
        </form>
    );
};

export default Login;
