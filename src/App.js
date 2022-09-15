import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Arttalk from "./pages/arttalk/Arttalk";
import Jabber from "./pages/jabber/Jabber";
import Helmet from "react-helmet";

import {
    BrowserRouter as Router,
    Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
    return (
        <>
            <Helmet>
            <link
                rel="icon"
                type="image/png"
                href="./logo192.png"
                sizes="16x16"
            />
            </Helmet>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                    <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
                    <Route path="/profile/:username" element={user ? <Profile /> : <Login />}/>
                    <Route exact path="/arttalk" element={user ? <Arttalk /> : <Login />}/>
                    <Route exact path="/jabber" element={user ? <Jabber /> : <Login />} />
              </Routes>
            </Router>
        </>
  );
}

export default App;
