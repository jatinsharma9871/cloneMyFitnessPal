import React from "react";
import "./SignIn.css";
import { useState } from "react";
import axios from "axios";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users", formData)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="signIn">
        <h5>Almost there! Create your account</h5>
        <form className="myForm" onSubmit={handleSubmit}>
          <input
            className="email"
            id="email"
            placeholder="Email address"
            onChange={handleChange}
          />
          <br />
          <input
            className="password"
            id="password"
            placeholder="Create a password"
            onChange={handleChange}
          />
          <br />
          <a className="label">Forgot password?</a>
          <br />
          <input type="submit" value="LOG IN" className="btn" />
        </form>
        <label className="label">or</label>
        <br />
        <button>CONTINUE WITH GOOGLE</button>
      </div>
      <p>
        Not a member Yet?<span>Sign up Now!</span>
      </p>
    </>
  );
}

export { SignIn };
