import React from "react";
import "./SignUp.css";

function SignUp() {
  const handleChange = (e) => {
    /////
  };

  return (
    <div id="signUp">
      <form id="myForm">
        <input id="email" placeholder="Email address" onChange={handleChange} />
        <br />
        <input
          id="password"
          placeholder="Create a password"
          onChange={handleChange}
        />
        <br />
        <label className="label">
          Must be at least 10 characters, no spaces.
        </label>
        <br />
        <br />
        <input type={"checkbox"} />
        <label id="label2">Terms & Conditions</label>
        <br />
        <label className="label">
          I agree to MyFitnessPal's <span>Terms</span> & Conditions and <span>Privacy Policy</span>.
        </label>
        <br />
        <input type="submit" value="CONTINUE" id="btn" />
      </form>
      <label className="label">or</label>
      <br />
      <button>CONTINUE WITH GOOLE</button>
      <br />
      <p>We will never post anything without your permission</p>
      <p>
        This site is protected by reCAPTCHA and the Google{" "}
        <span>Privacy Policy</span> and <span>Terms</span> apply.
      </p>
    </div>
  );
}

export { SignUp };
