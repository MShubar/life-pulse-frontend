import { Navigate } from "react-router-dom";

// ProtectedRoute checks if the user is authenticated and then either renders the component or redirects
function ProtectedRoute({ element: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
    Component
  ) : (
    <Navigate to="/" replace /> // Redirect to login page if not authenticated
  );
}

export default ProtectedRoute;
