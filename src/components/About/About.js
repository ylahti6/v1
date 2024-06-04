import textContext from '../../assets/textContent';
import './About.scss';

function About() {
const {aboutTag, aboutContent} = textContext;
const spaces = Array(28).fill('\u00a0').join('');
    return(
        <div className='about'>
        <p>{aboutTag}</p>
        <p>{spaces}{aboutContent}</p>
        </div>
    );
}

export default About;