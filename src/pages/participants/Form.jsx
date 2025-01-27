import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../config";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit the form data to create a participant
    const response = await fetch(`${BASE_URL}/participants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("participantId", data.id); // Store participant ID
      localStorage.setItem("token", data.token); // Store authentication token
      navigate("/video"); // Navigate to video page
    } else {
      console.error("Error submitting form");
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label>Number:</label>
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
