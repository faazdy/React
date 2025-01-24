import React from "react";
import { useState } from "react";

function Like({ quantity }) {
  const [isLike, setIsLike] = useState(false);

  const handdleLike = () => {
    setIsLike(!isLike);
  };
  const styles = {
    color: isLike ? "red" : "",
    backgroundColor: isLike ? "pink" : "",
  };
  return (
    <button onClick={handdleLike} style={styles} className="like-btn">
      {isLike ? '❤️' : '🖤'} {quantity + (isLike ? 1 : 0)}
    </button>
  );
}

export default Like;
