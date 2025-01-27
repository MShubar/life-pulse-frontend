import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BASE_URL from "../../config";

function Success() {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score; // Get score passed from the test

  useEffect(() => {
    console.log("Score received:", score); // Debugging line

    if (!score) {
      alert("No score found.");
      navigate("/"); // Navigate back to the form page if no score found
      return;
    }

    // Simulate saving the score to the backend (or handle as needed)
    const saveScoreToDatabase = async () => {
      // Assuming you have a participant ID and token for the request
      const participantId = localStorage.getItem("participantId");
      const token = localStorage.getItem("token");

      if (!participantId || !token) {
        alert("User not authenticated. Please log in again.");
        navigate("/");
        return;
      }

      try {
        const response = await fetch(`${BASE_URL}/participants/${participantId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ score }),
        });

        if (response.ok) {
          alert("Score saved successfully! You passed!");
          setTimeout(() => {
            navigate("/"); // Redirect after 10 seconds
          }, 10000);
        } else {
          alert("Failed to save score. Please try again.");
        }
      } catch (error) {
        console.error("Error saving score:", error);
        alert("An error occurred while saving the score.");
      }
    };

    saveScoreToDatabase();
  }, [score, navigate]);

  return (
    <div>
      <h1>Congratulations!</h1>
      <p>You passed the test!</p>
      <p>We will send you an email with further instructions.</p>
    </div>
  );
}

export default Success;
