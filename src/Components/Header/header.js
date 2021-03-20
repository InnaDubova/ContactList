import React from "react";
import {Link} from "react-router-dom";
import Search from "../Search/search";
import "../Header/header.css";


const Header = () => {
    return(
    <div className="container-fluid bg-header">
    <header className="container">
        <Link to="/" className="logo">
            ContactList
        </Link>
    <ul className="nav">
        <li>
            <Link to="/">home</Link>
        </li>
        <li>
            <Link to="/add-contact">add new contact</Link>
        </li>
    </ul>
    <Search />
    </header>
</div>)
}

export default Header;