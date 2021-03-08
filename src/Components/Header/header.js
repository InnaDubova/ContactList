import React from "react";
import "../Header/header.css";

const Header = () => {
    return(
    <div class="container-fluid bg-header">
    <header class="container">
        <h1 class="logo">
            ContactList
        </h1>
    <ul class="nav">
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