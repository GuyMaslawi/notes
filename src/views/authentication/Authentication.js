import {useCallback, useState, useMemo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import Loader from "../../components/loader/Loader";
import "./Authentication.scss";

const Authentication = () => {
    const dispatch = useDispatch();
    const [loginPage, setLoginPage] = useState(true);
    const {loading} = useSelector((state) => state.notes);
    const {isAuthenticated} = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) {
            navigate('/notes-list')
        }
    }, [dispatch, isAuthenticated, navigate]);

    const currentTitle = useMemo(() => (loginPage ? "LOGIN" : "REGISTER"), [loginPage]);

    const currentComponent = useMemo(() => {
        return loginPage ? <Login/> : <Register/>
    }, [loginPage]);

    const currentFooter = useCallback(() => {
        if (loginPage) {
            return <span onClick={() => setLoginPage(!loginPage)}>Register</span>;
        }
        return <span onClick={() => setLoginPage(!loginPage)}>Login</span>;
    }, [loginPage]);

    return (
        <div className="authenticate">
            {loading && <Loader/>}
            <div className="wrapper">
                <h1 className="title">{currentTitle}</h1>
                {currentComponent}
                <div className="footer">{currentFooter()}</div>
            </div>
        </div>
    );
};

export default Authentication;
