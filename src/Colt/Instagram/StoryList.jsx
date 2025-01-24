import React from "react";
import Story from "./Story";

function StoryList({ data }) {
  return (
    <header className="story-container">
      <Story userPic={data[3].userPic} user='My story'/>
      {data.map((profile) => {
        return <Story {...profile} key={profile.id} />;
      })}
    </header>
  );
}

export default StoryList;
