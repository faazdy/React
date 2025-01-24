import React from "react";
import { useState } from "react";

function Story({ userPic, user }) {
  const [isView, setIsView] = useState(false);
  const handleView = () => {
    setIsView(true); //para que no cambie, solo se aplique el cambio contrario una vez y ya
  };

  const styles = {
    background: isView ? "gray" : "",
  };

  return (
    <div className="story">
      <div className="img" onClick={handleView} style={styles}>
        <img src={userPic} alt="" />
      </div>
      <span>{user}</span>
    </div>
  );
}

export default Story;
