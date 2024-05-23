import textContent from "../../assets/textContext";

function Time() {
    const {location} = textContent;
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padEnd(2, '0');

    return (
        <div className="time">
            <p> 
                <span className="location">{location}</span>
                {hours}
                <span className="blink"> : </span>
                {minutes}
            </p>
        </div>
    );
}

export default Time;