import "../Video/ShowCase.scss";
import "../../assets/textContext";
import sampleVideo from "../../assets/videos/younique-studio-showreel.mp4";
// import textContent from '../../assets/textContext';

function ShowCase() {
  // const {videoError } = textContent;
  return (
    <div className="sample">
      <video loop autoPlay muted>
        <source src={sampleVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default ShowCase;
