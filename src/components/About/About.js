import textContext from '../../assets/textContent';
import './About.scss';

function About() {
const {aboutTag, aboutContent} = textContext;

    return(
        <div className='about'>
        <p>{aboutTag}</p>
        <p>{aboutContent}</p>
        </div>
    );
}

export default About;