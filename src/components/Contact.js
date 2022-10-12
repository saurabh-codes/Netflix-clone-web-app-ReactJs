import React from "react";
import "./Contact.css";

function Contact() {
    const send = (e) => {
        e.preventDefault();
    };

    return (
        <div className="contact">
            <ul>
                <li><a onClick={send} href="/">FAQ</a></li>
                <li><a onClick={send} href="/">Help Centre</a></li>
                <li><a onClick={send} href="/">Account</a></li>
                <li><a onClick={send} href="/">Media Centre</a></li>
                <li><a onClick={send} href="/">Investor Relations</a></li>
                <li><a onClick={send} href="/">Jobs</a></li>
                <li><a onClick={send} href="/">Ways to Watch</a></li>
                <li><a onClick={send} href="/">Terms of Use</a></li>
                <li><a onClick={send} href="/">Privacy</a></li>
                <li><a onClick={send} href="/">Cookie Preferences</a></li>
                <li><a onClick={send} href="/">Corporate Information</a></li>
                <li><a onClick={send} href="/">Contact Us</a></li>
                <li><a onClick={send} href="/">Speed Test</a></li>
                <li><a onClick={send} href="/">Legal Notices</a></li>
                <li><a onClick={send} href="/">Only on Netflix</a></li>
            </ul>
        </div>
    );
}

export default Contact;
