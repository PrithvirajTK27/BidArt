import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router";
import Navi from "../../components/navi/Navi";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
    const history = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

    return (
        <div className="Container_chat">
            <Navi />
            <div className="regWrapper">
                <div class="lit_menu" style={{ paddingTop: '120px' }}>
                    <p>Art talk</p>
                </div>
                <div class="vl"></div>
                <form className="regBox" onSubmit={handleClick}>
                    
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
                            <button className="loginRegisterButton" onClick={() => history('/login')} type="button">Log into Account</button>
          </form>
      </div>
    </div>
  );
}
