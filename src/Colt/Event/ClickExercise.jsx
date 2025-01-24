import React from "react";

function ClickExercise({ mss, textBtn }) {
  const handleClick = () => {
    alert(mss);
  };
  return (
    <div>
      <button onClick={handleClick}>{textBtn}</button>
    </div>
  );
}

export default ClickExercise;
