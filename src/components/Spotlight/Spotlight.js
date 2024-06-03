import '../Spotlight/Spotlight.scss';
import textContent from '../../assets/textContent';

function Spotlight() {
    const {spotlight, project1} = textContent;
    return(
        <div className="spotlight">
            <p>{spotlight}</p>
            
            <div className='card'>
                <p>{project1}</p>
                <p>arrow</p>
            </div>
        </div>
    );
}

export default Spotlight;