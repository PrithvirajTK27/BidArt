import "./message.css";
import js_ago from 'js-ago';
import { useState } from "react";

export default function Message({ message, own }) {
    const [timestp] = useState(new Date(message.createdAt).getTime() / 1000);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
          <span className="messageBottom">{js_ago(timestp)}</span>
    </div>
  );
}
