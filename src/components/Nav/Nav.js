import { useState } from 'react';
import textContent from '../../assets/textContext'; // Fixed typo: 'textContext' to 'textContent'
// import NavTime from './features/featureTime';
import './Nav.scss';

function Nav() {
    const { name, works, about, contact } = textContent;

    return (
        <nav className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">{name}</div>
            </div>

            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <ul className="nav-list">
                <li><a href="#works">{works}</a></li>
                <li><a href="#about">{about}</a></li>
                <li><a href="#contact">{contact}</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
