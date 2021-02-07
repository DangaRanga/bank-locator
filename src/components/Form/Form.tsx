import React, { useState } from "react";

function Form(
  { formType }: { formType: string },
  { headerIcon }: { headerIcon: string }
) {
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
    name: "",
    bankName: "",
  });
  return (
    <div>
      <img src={headerIcon}></img>
      <h3>{formState.login ? "Login" : "Sign Up"}</h3>
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
        {formType === "bank" && (
          <div id="bank-fields">
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
        <button className=""> {formState.login ? "Login" : "Sign Up"}</button>
      </form>
    </div>
  );
}

export default Form;
