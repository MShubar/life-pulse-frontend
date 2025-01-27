import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../config";

function Practice() {
  const [timeLeft, setTimeLeft] = useState(60); // Time remaining
  const [validHits, setValidHits] = useState(0); // Valid hits
  const [lastPressTime, setLastPressTime] = useState(null); // Last press time
  const navigate = useNavigate();

  const timerRef = useRef(null);

  // Start the timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup timer on unmount
    return () => clearInterval(timerRef.current);
  }, []);

  // Stop the timer and navigate when time runs out
  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(timerRef.current);
      navigate("/result", { state: { score: validHits } }); // Navigate after the timer ends
    }
  }, [timeLeft, validHits, navigate]);

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

  // Debugging: Store participant ID and token in localStorage when practice ends
  const handleEndPractice = () => {
      localStorage.setItem("participantId", data.id); // Store participant ID
      localStorage.setItem("token", data.token); // Store authentication token

    console.log("Stored Participant ID:", localStorage.getItem("participantId"));
    console.log("Stored Token:", localStorage.getItem("token"));

    navigate("/result", { state: { score: validHits } });
  };

  return (
    <div>
      <h1>Practice</h1>
      <p>Instructions: Hit the space bar twice in a second within the given time limit. Don't hit too close together.</p>
      <p>Time remaining: {timeLeft}s</p>
      <p>Score: {validHits}/120</p>
      <button onClick={handleSpacePress}>Press Space</button>
      {/* Add a button to simulate practice end */}
      <button onClick={handleEndPractice}>End Practice</button>
    </div>
  );
}

export default Practice;
