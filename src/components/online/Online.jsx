import "./online.css";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Online({ currentId }) {
    const [friends, setFriends] = useState([]);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get("/users/friends/" + currentId);
            setFriends(res.data);
        };

        getFriends();
    }, [currentId]);

    return (
        <>
            {friends.map((o) => (
                <div className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img
                            className="rightbarProfileImg"
                            src={
                                o?.profilePicture
                                    ? PF + o.profilePicture
                                    : PF + "person/noAvatar.png"
                            }
                            alt=""
                        />
                    </div>
                    <span className="rightbarUsername">{o?.username}</span>
                </div>
            ))}
        </>
    );
}

