import './Contact.scss';
import textContent from '../../assets/textContent';

function Contact() {
const {getInContact} = textContent;

  return(
    <div className='contact'><h1>{getInContact}</h1></div>
  );
}

export default Contact;