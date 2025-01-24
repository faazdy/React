import React from "react";
import PostBody from "./Colt/Instagram/PostBody";
import StoryList from "./Colt/Instagram/StoryList";
import { posts } from "./Colt/Instagram/data";

export function App() {
  return (
    <>
      <StoryList data={posts}/>
      <PostBody posts={posts}/>
    </>
  );
}
