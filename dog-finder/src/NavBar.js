import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({dogs}) {
    const dogLinks = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name}`}>
            {dog.name}
        </NavLink>
    ))
    return (
        <nav>
            <NavLink exact to="/dogs">Home</NavLink>
            {dogLinks}
        </nav>
    );
};

export default NavBar;