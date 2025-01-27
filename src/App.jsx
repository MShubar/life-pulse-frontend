import { Routes, Route } from "react-router-dom";
import Form from "./pages/participants/Form";
import Video from "./pages/participants/Video";
import Result from "./pages/participants/Result";
import Practice from "./pages/participants/Practice";
import Test from "./pages/participants/Test";
import Success from "./pages/participants/Success";
import Failed from "./pages/participants/Failed";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/video" element={<Video />} />

      {/* Protected Routes */}
      <Route path="/result" element={<ProtectedRoute element={<Result />} />} />
      <Route path="/practice" element={<ProtectedRoute element={<Practice />} />} />
      <Route path="/test" element={<ProtectedRoute element={<Test />} />} />
      <Route path="/success" element={<ProtectedRoute element={<Success />} />} />
      <Route path="/failed" element={<ProtectedRoute element={<Failed />} />} />
    </Routes>
  );
}

export default App;
