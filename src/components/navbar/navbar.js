import  { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <ul>
                <li><NavLink exact to="/Home">Home</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/profile/percybolmer">Profile</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;

