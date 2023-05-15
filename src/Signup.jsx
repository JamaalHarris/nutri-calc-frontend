import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="container text-center" id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="Name" id="name" name="name" type="text" />
        </div>
        <div>
          <input placeholder="Email" name="email" type="email" />
        </div>
        <div>
          <input placeholder="Password" name="password" type="password" />
        </div>
        <div>
          <input placeholder="Password Confirmation" name="password_confirmation" type="password" />
        </div>

        <button className="btn btn-outline-secondary btn-lg" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
