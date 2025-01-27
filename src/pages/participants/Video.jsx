import { useNavigate } from "react-router-dom";
import Play from "../../../public/Play.mp4"; // Path to your video file

function Video() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/practice"); // Navigate to practice page
  };

  return (
    <div className="video-container">
      <h1 className="video-title">Watch the Instructional Video</h1>
      <div className="video-wrapper">
        <video
          src={Play}
          controls
          autoPlay
          loop
          className="video-player"
          aria-label="Instructional video for CPR training"
        />
      </div>
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Video;
