import React from "react";
import "../Footer/footer.css";

const Footer = () => {
    return( <footer class="container-fluid bg-footer">
    <ul>
        <li>
            <a href="#">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
        </li>
        <li>
            <a href="#">
            <i class="fa fa-twitter" aria-hidden="true"></i>
                
            </a>
        </li>
        <li>
            <a href="#">
            <i class="fa fa-google" aria-hidden="true"></i>
            </a>
        </li>
        <li>
            <a href="#">
            <i class="fa fa-pinterest" aria-hidden="true"></i>
            </a>
        </li>
    </ul>
    <p>&#169;2023 ContactList.</p>
</footer>)
}

export default Footer;