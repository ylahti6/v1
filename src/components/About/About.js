import textContext from '../../assets/textContext';
import './About.scss';

function About() {
const {aboutTag, aboutContent} = textContext;

    return(
        <>
        <p>{aboutTag}</p>
        <p>{aboutContent}</p>
        </>
    );
}

export default About;