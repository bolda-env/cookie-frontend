import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const url = "http://localhost:4000/register";

function RegisterForm() {
  const [person, setPerson] = useState({
    create_username: "",
    email_address: "",
    create_password: "",
    confirm_password: "",
  });

  const [isError, setIsError] = useState(false);
  const [alert, setAlert] = useState({ type: "", msg: "" });

  // Event Handlers
  function valueHandler(ev) {
    let name = ev.target.name;
    let val = ev.target.value;
    setPerson({ ...person, [name]: val });
  }

  function submitHandler(ev) {
    ev.preventDefault();
    const checkbox = document.querySelector("input[type=checkbox]");

    if (person.create_username && person.email_address && checkbox.checked) {
      if (person.create_password === person.confirm_password) {
        Axios.post(url, person).then((resp) => {
          const { msg, isState, redirect } = resp.data;
          if (!isState) {
            setIsError(true);
            setAlert({
              type: "error-alert",
              msg: msg,
            });
          } else {
            window.location = redirect;
          }
        });
      } else {
        setIsError(true);
        setAlert({
          type: "error-alert",
          msg: "Whoops! wrong password combination.",
        });
      }
    } else {
      setIsError(true);
      setAlert({
        type: "error-alert",
        msg: "Please fill the blank field(s) or checkbox.",
      });
    }
  }

  return (
    <div className="form-container">
      {isError ? <p className={alert.type}>{alert.msg}</p> : ""}
      <form>
        <div>
          <i className="bi bi-person-fill"></i>
          <input
            type="text"
            name="create_username"
            id="username"
            placeholder="Create username"
            value={person.create_username}
            onChange={valueHandler}
          />
        </div>
        <div>
          <i className="bi bi-envelope-fill"></i>
          <input
            type="email"
            name="email_address"
            id="email_address"
            placeholder="Email Address"
            value={person.email_address}
            onChange={valueHandler}
          />
        </div>
        <div>
          <i className="bi bi-key-fill"></i>
          <input
            type="password"
            name="create_password"
            id="password"
            placeholder="Password"
            value={person.create_password}
            onChange={valueHandler}
          />
        </div>
        <div>
          <i className="bi bi-key-fill"></i>
          <input
            type="password"
            name="confirm_password"
            id="cfm_password"
            placeholder="Confirm Password"
            value={person.confirm_password}
            onChange={valueHandler}
          />
        </div>
        <div className="term-condition">
          <input type="checkbox" name="term_condition" id="term_condition" />
          <p>
            I adhered to the <Link to="#">terms & conditions</Link> {"."}
          </p>
        </div>
        <div className="btn">
          <button type="submit" onClick={submitHandler}>
            get started
          </button>
        </div>
      </form>
      <p>
        Already have an exiting account{" "}
        <strong>
          <Link to="/login">sign in</Link>
          {"."}
        </strong>
      </p>
    </div>
  );
}

export default RegisterForm;
