import React from "react";
import Post from "./Post";
import "./style.css";

function PostBody({ posts }) {
  return (
    <section className="post-container">
      {posts.map((data) => {
        return <Post {...data} key={data.id} />;
      })}
    </section>
  );
}

export default PostBody;
