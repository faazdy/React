import React from "react";
import PostBody from "./MiniProjects/Instagram/PostBody"
import StoryList from "./MiniProjects/Instagram/StoryList";
import { posts } from "./MiniProjects/Instagram/data";

export function App() {
  return (
    <>
      <StoryList data={posts}/>
      <PostBody posts={posts}/>
    </>
  );
}
