import textContent from '../assets/textContext';

import './Nav.scss';

function Nav() {
const {name, works, about, contact, timeFeature} = textContent;
    return (
        <nav>
            <ul>
                <li>{name}</li>
                <li>{works}</li>
                <li>{about}</li>
                <li>{contact}</li>
                <li>{timeFeature}</li>
            </ul>
        </nav>
    );
}

export default Nav;