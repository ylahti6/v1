import textContext from '../../assets/textContext';
import './Hero.scss';

function Hero() {
const {header, mongoDB } = textContext;
    return(
        <div className='hero'>
            <h1>{header}</h1>
            <h1>{mongoDB}</h1>
        </div>
    );
}

export default Hero;