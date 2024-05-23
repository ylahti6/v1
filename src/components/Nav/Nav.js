import textContent from '../../assets/textContext';
import './Nav.scss';

import NavTime from './featureTime';


function Nav() {
const {name, works, about, contact} = textContent;

    return (
        <nav>
            <ul>
                <li>{name}</li>
                <li>{works}</li>
                <li>{about}</li>
                <li>{contact}</li>
                <li><NavTime /></li>
            </ul>
        </nav>
    );
}

export default Nav;