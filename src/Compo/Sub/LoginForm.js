import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const url = "http://localhost:4000/login";

function LoginForm() {
  const [person, setPerson] = useState({ username: "", password: "" });

  function loginForm() {
    Axios.post(url, person).then((resp) => {
      const { redirect } = resp.data;
      window.location = redirect;
    });
  }

  function loginHandler(ev) {
    let name = ev.target.name;
    let val = ev.target.value;

    setPerson({ ...person, [name]: val });
  }

  return (
    <div className="form-container">
      <form method="post">
        <div>
          <i className="bi bi-person-fill"></i> 
          <input
            type="text"
            name="username"
            id="id_user"
            placeholder="Username"
            value={person.username}
            onChange={loginHandler}
          />
        </div>
        <div>
          <i className="bi bi-key-fill"></i>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={person.password}
            onChange={loginHandler}
          />
        </div>
        <div className="btn">
          <button
            type="submit"
            onClick={(ev) => {
              ev.preventDefault();
              loginForm();
            }}
          >
            sign in
          </button>
        </div>
      </form>
      <p>
        I don't have an account{" "}
        <strong>
          <Link to="/register">sign up</Link>
          {"."}
        </strong>
      </p>
    </div>
  );
}

export default LoginForm;
