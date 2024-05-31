import textContext from '../../assets/textContext';
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