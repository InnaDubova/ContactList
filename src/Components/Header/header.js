import React from "react";
import "../Header/header.css";

const Header = () => {
    return(
    <div className="container-fluid bg-header">
    <header className="container">
        <h1 className="logo">
            ContactList
        </h1>
    <ul className="nav">
        <li>
            <a href="#">home</a>
        </li>
        <li>
            <a href="./pages/about.html">add new contact</a>
        </li>
    </ul>
    </header>
</div>)
}

export default Header;