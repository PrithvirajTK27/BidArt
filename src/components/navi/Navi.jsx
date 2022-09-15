import notification from '../assets/Notification.svg';
import account from '../assets/Account.svg';
import logo from '../assets/logo.svg';
import sr_logo from '../assets/sr_logo.svg';
import './navi.css';
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import Home from "../../pages/home/Home";
import { AuthContext } from "../../context/AuthContext";

function Navi() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [show, setShow] = React.useState(false);
    const [acc_state, setAcc] = React.useState("none");
    const [op, setOp] = React.useState("0.8");
    const [target, setTarget] = React.useState(null);
    const ref = React.useRef(null);
    const handleLogoutClick = () => {
        localStorage.setItem("user", "null");
        window.location.reload(false);
        <Home />
    }
    const handleClick = (event) => {
        if (user!=null) {
            //PF = process.env.REACT_APP_PUBLIC_FOLDER;
            if (acc_state === "none") {
                setAcc("flex");
                setOp("1");
            }
            else {
                setAcc("none");
                setOp("0.8");
            }
        }
        else {
            setShow(!show);
            setTarget(event.target);
        }
    };

    //const [display_logo, setState] = React.useState("flex");
    const [display_logo_sl, setState2] = React.useState("none");
    const [display_logo_op, setState3] = React.useState("0");
    React.useEffect(() => {
        if (typeof window !== "undefined") {
            window.onscroll = () => {
                let currentScrollPos = window.pageYOffset;
                let maxScroll = document.body.scrollHeight - window.innerHeight;
                if (currentScrollPos > 0 && currentScrollPos < maxScroll+1) {
                    //setState("none")
                    setState2("flex")
                } else {
                    setState2("none")
                    //setState("flex")
                }
                var scrollTop = window.pageYOffset;
                var elementHeight = maxScroll;
                let op = 1.70 - ((elementHeight - scrollTop) /elementHeight)^(1/2) ;
                setState3(op);
            }
        }
    }, []);
    return (
        <div>
            <div className="logo_pos_chat" style={{ display: "flex"}}>
                <Link to="/" className="btn-action">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </div>
            <div className="logo_pos_chat_2" style={{ display: display_logo_sl, opacity: display_logo_op}}>
                <Link to="/" className="btn-action">
                    <img src={sr_logo} className="App-logo" alt="logo" />
                </Link>
            </div>
            <div className="roundedCorner" style={{ opacity:op}}>
                            <div className="act_cont">
                                <div className="noti">
                                    <img src={notification} className="act_bar" alt="notification" height="55px" />
                    </div>
                    <div className="acc">
                        <img src={account} className="act_bar" alt="account" height="55px" onClick={handleClick} />
                        <div className="acc_" style={{ display: acc_state }}>
                            {user ?
                                <div className="Dropuser">
                                <Link to={`/profile/${user.username}`}>
                                    <img
                                        src={
                                            user.profilePicture
                                                ? PF + user.profilePicture
                                                : PF + "person/noAvatar.png"
                                        }
                                        alt=""
                                        className="usbarImg"
                                        height="100px"
                                        />
                                    </Link>
                                    <p className="usr_name">{user.username}</p>
                                    <button className="usrLogoutButton" onClick={handleLogoutClick}>Log Out</button>
                                </div> : <></>}
                        </div>
                                    
                                    <div className="acc_view1" ref={ref} >
                                        <Overlay
                                            show={show}
                                            target={target}
                                            placement="bottom-end"
                                            container={ref}
                                            containerPadding={20}
                                        >
                                <Popover id="popover-contained" placement="left-start">
                                    <Popover.Header as="h3">My Account</Popover.Header>
                                    <Popover.Body>
                                        <div className="ACC_cont">
                                            <div className="myacc_cont">
                                                <div className="signIn">
                                                    <p>Sign In</p>
                                                </div>
                                                <p>OR</p>
                                                <div className="signUp">
                                                    <p>Sign Up</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Popover.Body>
                                </Popover>
                                        </Overlay>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div >
    );
}

export default Navi;