import React from "react";
import "../Footer/footer.css";

const Footer = () => {
    return( <footer className="container-fluid bg-footer">
    <ul>
        <li>
            <a href="#">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
        </li>
        <li>
            <a href="#">
            <i className="fa fa-twitter" aria-hidden="true"></i>
                
            </a>
        </li>
        <li>
            <a href="#">
            <i className="fa fa-google" aria-hidden="true"></i>
            </a>
        </li>
        <li>
            <a href="#">
            <i className="fa fa-pinterest" aria-hidden="true"></i>
            </a>
        </li>
    </ul>
    <p>&#169;2023 ContactList.</p>
</footer>)
}

export default Footer;