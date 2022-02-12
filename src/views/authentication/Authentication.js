import { useMemo } from "react";
import Login from "./login/Login";
import Register from "./register/Register";
import "./Authentication.scss";
import { useCallback, useState } from "react";

const Authentication = () => {
  const [login, setLogin] = useState(false);

  const currentTitle = useMemo(() => (login ? "LOGIN" : "REGISTER"), [login]);

  const currentComponent = useMemo(
    () => (login ? <Login /> : <Register />),
    [login]
  );

  const currentFooter = useCallback(() => {
    if (login) {
      return <span onClick={() => setLogin(!login)}>Create User</span>;
    }
    return <span onClick={() => setLogin(!login)}>Login</span>;
  }, [login]);

  return (
    <div className="autheticate">
      <div className="wrapper">
        <h1 className="title">{currentTitle}</h1>
        {currentComponent}
        <div className="footer">{currentFooter()}</div>
      </div>
    </div>
  );
};

export default Authentication;
