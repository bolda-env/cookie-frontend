import React from "react";

function Profile({ user, avatar_profile }) {
  return (
    <section className="profile-dialog">
      <div className="avata-img">
        <img src={avatar_profile} alt="User" width="200" />
      </div>
      <div>
        <p>{user}</p>
        <span>Online</span>
      </div>
    </section>
  );
}

export default Profile;
