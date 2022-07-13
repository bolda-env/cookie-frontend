import React from "react";

// Component
import CookieStarter from "./Sub/CookieStarter";
import EntryCaption from "./Sub/EntryCaption";
import LoginForm from "./Sub/LoginForm";

function Login() {
  document.title = "Sigin - Cookie";
  return (
    <article className="wrapper">
      <CookieStarter />
      <EntryCaption head_caption={"sign in"} />
      <LoginForm />
    </article>
  );
}

export default Login;
