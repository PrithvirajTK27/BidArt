import chat_search from '../assets/chat_search.svg'
import './jabber.css';
import React from "react";
import Sidebr from '../../components/sidebr/Sidebr';
import Navi from '../../components/navi/Navi';
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
//import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";

import p1 from '../assets/chat_head_img/p1.jpg'
import p2 from '../assets/chat_head_img/p2.jpg'
import p3 from '../assets/chat_head_img/p3.jpg'
import p4 from '../assets/chat_head_img/p4.jpg'
import p5 from '../assets/chat_head_img/p5.jpg'
import p6 from '../assets/chat_head_img/p6.jpg'
import p7 from '../assets/chat_head_img/p7.jpg'
import p8 from '../assets/chat_head_img/p8.jpg'
import bg_head from '../assets/chat_head_img/chat_hover.svg'

export default function Jabber() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const socket = useRef();
    const { user } = useContext(AuthContext);
    const scrollRef = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user._id);
    }, [user]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("/conversations/" + user._id);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user._id]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("/messages/" + currentChat?._id);
                setMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        };

        const receiverId = currentChat.members.find(
            (member) => member !== user._id
        );

        socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text: newMessage,
        });

        try {
            const res = await axios.post("/messages", message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    return (
        <div className="Container_chat">
            <>
                <><Navi /></>
                <><Sidebr /></>
                <div className="App_chat_">
                    <body className="App-body_chat_">
                        <div class="menubar">
                            <div class="lit_menu">
                                <p>Art talk</p>
                            </div>
                        </div>
                        <div className="messenger">
                            <div className="chat_cont">
                                <div className="chat_header">
                                    <img src={chat_search} className="chat_search" alt="chat_search" />
                                </div>
                                <div className="chat_list">
                                    <div className="chatMenu">
                                        <div className="chatMenuWrapper">
                                            {conversations.map((c) => (
                                                <div onClick={() => setCurrentChat(c)}>
                                                    <Conversation conversation={c} currentUser={user} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="chatBox">
                                    <div className="chatBoxWrapper">
                                        {currentChat ? (
                                            <>
                                                <div className="chatBoxTop">
                                                    {messages.map((m) => (
                                                        <div ref={scrollRef}>
                                                            <Message message={m} own={m.sender === user._id} />
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="chatBoxBottom">
                                                    <input
                                                        className="chatMessageInput"
                                                        placeholder="write something..."
                                                        onChange={(e) => setNewMessage(e.target.value)}
                                                        value={newMessage}
                                                    ></input>
                                                    <button className="chatSubmitButton" onClick={handleSubmit}>
                                                        Jam
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                                <div className="bg_chat_head">
                                                    <img src={bg_head} className="bg_head" alt="bg_head" />
                                                    <div className="frame_chat_head">
                                                        <div class="circle" style={{ '--total': 8 }}>
                                                            <div class="stat" style={{ '--i': 1 }}>
                                                                <img src={p1} className="p1" alt="p1" />
                                                            </div>
                                                            <div class="stat" style={{ '--i': 2 }}>
                                                                <img src={p2} className="p2" alt="p2" />
                                                            </div>
                                                            <div class="stat" style={{ '--i': 3 }}>
                                                                <img src={p3} className="p3" alt="p3" />
                                                            </div>
                                                            <div class="stat" style={{ '--i': 4 }}>
                                                                <img src={p4} className="p4" alt="p4" />
                                                            </div>
                                                            <div class="stat" style={{ '--i': 5 }}>
                                                                <img src={p5} className="p5" alt="p5" />
                                                            </div>
                                                            <div class="stat" style={{ '--i': 6 }}>
                                                                <img src={p6} className="p6" alt="p6" />
                                                            </div>
                                                            <div class="stat" style={{ '--i': 7 }}>
                                                                <img src={p7} className="p7" alt="p7" />
                                                            </div>
                                                            <div class="stat" style={{ '--i': 8 }}>
                                                                <img src={p8} className="p8" alt="p8" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </body>
                </div>
            </>
        </div>
    );
}