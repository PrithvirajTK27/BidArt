import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import sr_logo from '../assets/sr_logo.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
    const history = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
      <div className="Container">
    <div className="login">
              <div className="loginWrapper">
                  <div class="lit_menu" style={{ paddingTop: '150px', paddingRight: '15px'}}>
                      <p>Art talk</p>
                  </div>
                  <div class="vl2"></div>
                  <div className="logo_pos_chat_2" style={{ display: 'flex', opacity: 1}}>
                      <Link to="/" className="btn-action">
                          <img src={sr_logo} className="App-logo" alt="logo" />
                      </Link>
                  </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
                          </button>
                          <span className="loginForgot" type="button">Forgot Password?</span>
                          <button className="loginRegisterButton" onClick={() => history('/register')} type="button">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
