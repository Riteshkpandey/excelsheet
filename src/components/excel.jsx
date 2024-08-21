import React, { useState } from "react";
import Card from "./card";

const Excel = () => {
  const [bgColor, setBgColor] = useState("");
  const [arr, setArr] = useState(
    Array(9).fill({
      color: "",
    })
  );
  const [showColor, setShowColor] = useState(false);
  const changeColor = (index) => {
    console.log(showColor, index);
    setShowColor(!showColor);
    const updateColor = [...arr];
    updateColor[index] = {
      color: bgColor,
    };
    setArr(updateColor);
    setBgColor("");
    setShowColor(!showColor);
  };

  const changeTORed = () => {
    setBgColor("bg-red");
  };
  const changeTOGreen = () => {
    setBgColor("bg-green");
  };
  const changeTOYellow = () => {
    setBgColor("bg-yellow");
  };

  return (
    <div>
      {showColor && (
        <div>
          <button onClick={changeTORed}>red</button>
          <button onClick={changeTOGreen}>green</button>
          <button onClick={changeTOYellow}>yellow</button>
        </div>
      )}

      {arr.map((item, index) => (
        <div key={index} onClick={() => changeColor(index)}>
          <Card bgcolor={item.color} />
        </div>
      ))}
    </div>
  );
};

export default Excel;
