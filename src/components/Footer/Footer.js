import '../Footer/Footer.scss';
import textContent from '../../assets/textContent';

function Footer() {
const {name} = textContent;

    return(
        <div className="footer">
            <h1>{name}</h1>
        </div>
    );
}

export default Footer;