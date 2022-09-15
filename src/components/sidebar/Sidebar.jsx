import "./sidebar.css";
import {
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
} from "@material-ui/icons";
import Home from "../../pages/home/Home";

export default function Sidebar() {
    const handleLogoutClick = () => {
        localStorage.setItem("user", "null");
        window.location.reload(false);
        <Home />
        }
  return (
      <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Friends</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Saved</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Help</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Business</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Bidding</span>
          </li>
        </ul>
              <button className="LogoutButton" onClick={handleLogoutClick}>Log Out</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          Quick Access
        </ul>
      </div>
    </div>
  );
}