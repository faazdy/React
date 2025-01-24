import React from "react";
import Like from "./Like";

function Post({ user, userPic, likes, image, description }) {
  return (
    <section className="post-card">
      <div className="profile">
        <img src={userPic} alt={`${user} picture`} />
        <a href="#" className="username">{user}</a>
      </div>
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <div className="interactions">
          <Like quantity={likes} />
        </div>
        <div className="text">
          <a href="#" className="username">
            <h4>{user}</h4>
          </a>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default Post;
