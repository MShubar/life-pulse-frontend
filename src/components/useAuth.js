import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // If no token is found, the user is not logged in
      alert("User not authenticated. Redirecting to login...");
      navigate("/"); // Redirect to login page (Form)
    }
  }, [navigate]);

  return;
}

export default useAuth;
