import React, { useState } from "react";

import Nav from "./Sub/Nav";
import Post from "./Sub/Post";
import Profile from "./Sub/Profile";

import avatar_profile from "./Screenshot.jpg";

function Home() {
  const [user] = useState("Guest User!");
  document.title = `${user} - Cookie`;
  return (
    <article className="main-wrapper">
      <Nav />
      <Post avatar_profile={avatar_profile} />
      <Profile user={user} avatar_profile={avatar_profile} />
    </article>
  );
}

export default Home;
