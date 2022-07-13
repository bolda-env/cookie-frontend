import React from "react";

// Component
import CookieStarter from "./Sub/CookieStarter";
import EntryCaption from "./Sub/EntryCaption";
import RegisterForm from "./Sub/RegisterForm";

function Register() {
  document.title = "Register - Cookie";
  return (
    <article className="wrapper">
      <CookieStarter />
      <EntryCaption head_caption={"register"} />
      <RegisterForm />
    </article>
  );
}

export default Register;
