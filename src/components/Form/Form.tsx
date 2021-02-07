import React, { useState } from "react";

function Form({ login, headerIcon }: { login: boolean; headerIcon: string }) {
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
    name: "",
    bankName: "",
    isBank: true,
  });
  return (
    <div>
      <img src={headerIcon}></img>
      <h3>{login ? "Login" : "Sign Up"}</h3>
      <form>
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
        {formState.isBank && login && (
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
        )}
        {formState.isBank && (
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
        )}
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
        <button className=""> {login ? "Login" : "Sign Up"}</button>
        <p>
          If you are a {formState.isBank ? "customer" : "bank employee"} Sign in{" "}
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
