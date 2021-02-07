// React Imports
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Component imports

// CSS imports
import "./Form.css";

function Form({ login }: { login: boolean }) {
  const history = useHistory();
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
    name: "",
    bankName: "",
    isBank: true,
  });
  // It would've been ideal to make the form field its own component
  // But in the interest of time I just left it as is.
  return (
    <div id="form-container">
      <img
        src={
          formState.isBank ? "assets/agreement.svg" : "assets/location-icon.svg"
        }
        id="form-icon"
        alt="form-icon"
      ></img>
      <h1>{login ? "Login" : "Sign Up"}</h1>
      <hr id="form-hr"></hr>
      <form>
        <div className="input-field">
          <input
            value={formState.email}
            onChange={(e) =>
              setFormState({
                ...formState,
                email: e.target.value,
              })
            }
            type="email"
            placeholder="Email Address"
          />
        </div>
        {formState.isBank && login && (
          <div className="input-field">
            <input
              value={formState.name}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  name: e.target.value,
                })
              }
              type="text"
              placeholder="Full Name"
            />
          </div>
        )}
        {formState.isBank && (
          <div className="input-field">
            <input
              value={formState.bankName}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  bankName: e.target.value,
                })
              }
              type="text"
              placeholder="Bank Name"
            />
          </div>
        )}
        <div className="input-field">
          <input
            value={formState.password}
            onChange={(e) =>
              setFormState({
                ...formState,
                password: e.target.value,
              })
            }
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="form-btn" onClick={(e) => history.push("/home")}>
          {" "}
          {login ? "Login" : "Sign Up"}
        </button>
        <p id="customer-toggle">
          If you are a {formState.isBank ? "customer" : "bank employee"} Sign{" "}
          {login ? "in" : "up"}{" "}
          <span
            id="clickable"
            onClick={(e) =>
              setFormState({
                ...formState,
                isBank: !formState.isBank,
              })
            }
          >
            {" "}
            here!{" "}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Form;
