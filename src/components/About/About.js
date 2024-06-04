import { useEffect } from 'react';
import textContext from '../../assets/textContent';
import './About.scss';
import { useState } from 'react';

function About() {
const {aboutTag, aboutContent} = textContext;
const [spaces, setSpaces] = useState(getSpaces());

function getSpaces() {
    let spaces;
    if (window.innerWidth <= 640){
        spaces = Array(14).fill('\u00a0').join('');
    }
    else {
        spaces = Array(28).fill('\u00a0').join('');
    }
    return spaces;
}

useEffect(() => {
    function handleResize() {
        setSpaces(getSpaces());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);  
}, []);
    return(
        <div className='about'>
        <p>{aboutTag}</p>
        <p>{spaces}{aboutContent}</p>
        </div>
    );
}

export default About;