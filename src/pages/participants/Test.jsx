import { useState, useEffect, useRef } from "react"; 
import { useNavigate } from "react-router-dom";

function Test() {
  const [timeLeft, setTimeLeft] = useState(60); // Time remaining for the test
  const [validHits, setValidHits] = useState(0); // Valid hits
  const [lastPressTime, setLastPressTime] = useState(null); // Last press time
  const navigate = useNavigate();

  // Ref to store the timer
  const timerRef = useRef(null);

  // Start the timer
  useEffect(() => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            // Use a delayed navigation to ensure no state change during render
            setTimeout(() => {
              navigate("/success", { state: { score: validHits } });
            }, 100); // Small delay to avoid navigation during render
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    // Cleanup on component unmount
    return () => clearInterval(timerRef.current);
  }, [validHits, navigate]);

  // Handle spacebar presses
  const handleSpacePress = () => {
    const currentTime = Date.now();

    if (lastPressTime) {
      const timeDifference = currentTime - lastPressTime;

      // Count valid presses between 0.4 and 0.6 seconds
      if (timeDifference >= 400 && timeDifference <= 600) {
        setValidHits((prevValidHits) => prevValidHits + 1);
      }
    }

    setLastPressTime(currentTime); // Update the last press time
  };

  return (
    <div>
      <h1>Test</h1>
      <p>
        Instructions: Hit the space bar twice in a second within the given time
        limit. Don't hit too close together.
      </p>
      <p>Time remaining: {timeLeft}s</p>
      <p>Score: {validHits}/120</p>
      <button onClick={handleSpacePress}>Press Space</button>
    </div>
  );
}

export default Test;
