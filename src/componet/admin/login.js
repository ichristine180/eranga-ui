import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import imag from "../../img-01.png";
import { login } from "../../redux/Public";
import "./main.css";
import "./util.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailEr, setEmailError] = useState("");
  const [passwordEr, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(login({ email, password }));
  };
  const error = useSelector(({ publicDoc }) => publicDoc).error;
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={imag} alt="IMG" />
          </div>

          <div className="login100-form validate-form">
            <span className="login100-form-title">Admin Login</span>
            <p className="text-danger text-center">{error}</p>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => validateEmail(email, setEmailError)}
              />
              <p className="text-danger text-center">{emailEr}</p>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => validatePassWord(password, setPasswordError)}
              />
              <p className="text-danger text-center">{passwordEr}</p>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </div>
            <div className="container-login100-form-btn">
              <button
                onClick={() => loginHandler()}
                className="login100-form-btn"
                disabled={
                  email && password && !emailEr && !passwordEr ? false : true
                }
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

export const validateEmail = (email, setEmailError) => {
  const validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email) {
    setEmailError("Email is required");
    return false;
  }
  if (email.match(validRegex)) {
    setEmailError("");
    return true;
  } else {
    setEmailError("Email is invalid (exapmle@abc.xx)");
    return false;
  }
};

const validatePassWord = (password, setPasswordError) => {
  if (password) {
    if (password.length < 4)
      setPasswordError("Password must be at least 4 charcter");
    else setPasswordError("");
    return;
  } else setPasswordError("Password is required to login");
  return;
};
