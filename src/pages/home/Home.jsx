import slog from '../assets/slog.svg';
import exp from '../assets/explore.svg';
import pub from '../assets/publish.svg';
import bid from '../assets/bid.svg';
import './home.css';
import React from "react";
import Navi from '../../components/navi/Navi';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Container">
            <><Navi /></>
            <div className="logo_pos">
                <img src={slog} className="App-slog" alt="slogan" />
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <div className="App">
                <body className="App-body">
                    <div className="Action-cont">
                        <a
                            className="act-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="SR_cont">
                                <div className="act_cont_vectore">
                                    <img src={exp} className="exp-l" alt="explore" height="50px" />
                                </div>
                                <p> Explore </p>
                            </div>
                        </a>
                        <Link to="/arttalk" className="btn-action">
                            <div className="SR_cont">
                                <div className="act_cont_vectore">
                                    <img src={pub} className="pub-l" alt="publish" height="50px" />
                                </div>
                                <p> ArtTalk </p>
                            </div>
                        </Link>
                        <a
                            className="act-link"
                            href="https://reactjs.org/tutorial/tutorial.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="SR_cont">
                                <div className="act_cont_vectore">
                                    <img src={bid} className="chat-l" alt="chat" height="50px" />
                                </div>
                                <p> Bid </p>
                            </div>
                        </a>
                    </div>

                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </body>
            </div>
            <div class="footer">
                <div class="footer_body">
                    <div class="each_footer">
                        <h1> About </h1>
                        <p> News </p>
                        <p> Career </p>
                        <p> Policies </p>
                        <br /><br />
                    </div>
                    <div class="each_footer">
                        <h1> Support </h1>
                        <p> Help </p>
                        <p> Raise issue </p>
                    </div>
                    <div class="each_footer">
                        <h1> Contact </h1>
                        <p> Facebook </p>
                        <p> Email </p>
                        <p> Twitter </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
