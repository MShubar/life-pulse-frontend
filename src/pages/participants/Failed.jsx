import { useNavigate, useLocation } from "react-router-dom";

function Failed() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score } = location.state || { score: 0 }; // Get score from previous page

  const handleRetry = () => {
    navigate("/test"); // Navigate back to the main menu
  };



  const handleMainMenu = () => {
    navigate("/"); // Navigate back to the main menu
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Result</h1>
      <p>Your Score: <strong>{score}</strong>/120</p>
      {score >= 100 && score <= 120 ? (
        <div>
          <h3>🎉 Success! You passed the practice. 🎉</h3>
          <button onClick={handleStartTest}>Start Test</button>
        </div>
      ) : (
        <div>
          <h3>😞 Unfortunately, you did not meet the criteria.</h3>
          <p>Would you like to retry?</p>
          <button onClick={handleRetry}>Restart Test</button>
          <button onClick={handleMainMenu}>Main Menu</button>
        </div>
      )}
    </div>
  );
}

export default Failed;
