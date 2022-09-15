import React from "react";
import add from '../assets/add.svg';
import home from '../assets/home.svg';
import chat from '../assets/chat.svg';
import './sidebr.css';
import { Link } from 'react-router-dom';

function Sidebr() {
    return (
        <div className="Side_cont">
            <div class="icons">
                <div className="i">
                    <Link to="/arttalk" className="btn-action">
                    <div class="home">
                        <img src={home} className="home" alt="home" />
                    </div>
                    </Link>
                </div>
                <div className="i_s">
                <Link to="/publish" className="btn-action">
                    <div class="add">
                        <img src={add} className="add" alt="add" />
                        </div>
                    </Link>
                </div>
                <div className="i_s1">
                    <Link to="/jabber" className="btn-action">
                    <div class="chat">
                        <img src={chat} className="chat" alt="chat" />
                        </div>
                        </Link>
                </div>
            </div>
            <div className="roundedCorner_vert"></div>
            </div>
        );
}

export default Sidebr;