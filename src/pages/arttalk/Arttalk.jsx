import './arttalk.css';
import React from "react";
import Sidebr from '../../components/sidebr/Sidebr';
import Sidebar from '../../components/sidebar/Sidebar';
import Navi from '../../components/navi/Navi';
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

function Arttalk() {
    return (
        <div className="Container_chat">
            <>
            <div className="App_chat">
                <body className="App-body_chat">
                    <div class="menubar">
                        <div class="lit_menu" style={{ marginLeft: '40px' }}>
                            <p>Art talk</p>
                        </div>
                    </div>
                </body>
                </div>
            <><Navi /></>
            <div className="artContainer">
            <><Sidebr /></>
            <><Sidebar /></>
            <><Feed /></>
            <><Rightbar /></>
            </div>
            </>
        </div>
);}

export default Arttalk;