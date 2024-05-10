import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpform.css"

function SignUpform() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        userName: "",
        isAgreed: false,
    });

    const [error, setError] = useState({});

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = {};

        if (!formData.name.trim().length) {
            errors.name = "Name required";
        }

        if (!formData.email.trim().length) {
            errors.email = "Email required";
        }

        if (!formData.mobile.trim().length) {
            errors.mobile = "Mobile required";
        }

        if (!formData.userName.trim().length) {
            errors.userName = "Username required";
        }

        if (!formData.isAgreed) {
            errors.isAgreed = "Terms required";
        }

        setError(errors);

        if (!Object.keys(errors).length) {
            localStorage.setItem("userData", JSON.stringify(formData));
            navigate("/genre");
        }
    };

    useEffect(() => {
        console.log(error);
    }, [error]);


  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Super app</h1>
      <h6 className="new-account">Create your new account</h6>
      <div className="input-box">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        {error.name && <span className="error-text">{error.name}</span>}
        <input
          type="text"
          placeholder="UserName"
          name="userName"
          onChange={handleChange}
        />
        {error.userName && (
          <span className="error-text">{error.userName}</span>
        )}
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        {error.email && <span className="error-text">{error.email}</span>}
        <input
          type="text"
          maxlength="10"
          placeholder="Mobile"
          name="mobile"
          onChange={handleChange}
        />
        {error.mobile && <span className="error-text">{error.mobile}</span>}
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          className="checkbox-button"
          onChange={(e) =>
            setFormData({
                ...formData,
                [e.target.name]: e.target.checked,
            })
        }
          name="isAgreed"
        />
        <span className="checkbox-text">
          Share my registration data with Superapp
        </span>
      </div>
      {error.isAgreed && (
        <span className="error-text checkbox-error">
          {error.isAgreed}
        </span>
      )}
      <button className="signup-button">SIGN UP</button>
      <p className="term-text">
        By clicking on Sign up. you agree to Superapp{" "}
        <span className="higlight-text">
          Terms and <br />
          Conditions of Use
        </span>
      </p>
      <p className="term-text">
        To learn more about how Superapp collects, uses, shares and protects
        your personal data please head Superapp{" "}
        <span className="higlight-text">
          Privacy <br />
          Policy
        </span>
      </p>
    </form>
  );
}

export default SignUpform;
