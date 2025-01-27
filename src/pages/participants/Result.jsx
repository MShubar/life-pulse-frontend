import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score } = location.state || { score: 0 }; // Get score from previous page

  const handleStartTest = () => {
    alert("Proceeding to test...");
    navigate("/test"); // Navigate to the test page
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
          <button onClick={handleMainMenu}>Main Menu</button>
        </div>
      ) : (
        <div>
          <h3> Unfortunatly! You didn't pass the practice. </h3>
          <button onClick={handleStartTest}>Start Test</button>
          <button onClick={handleMainMenu}>Main Menu</button>
        </div>
      )}
    </div>
  );
}

export default Result;
