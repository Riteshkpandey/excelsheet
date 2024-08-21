import React, { useState } from "react";
import Card from "./card";

const Excel = () => {
  const [bgColor, setBgColor] = useState("");
  const [arr, setArr] = useState(
    Array(4).fill({
      color: "",
    })
  );
  const [showColor, setShowColor] = useState(false);
  const changeColor = (index) => {
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

  const generateRow = (item, index) => {
    return (
      <div
        className="card"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {[1, 2, 3, 4].map((id) => (
          <div onClick={() => changeColor(index + id)}>
            <Card bgcolor={item.color} />
          </div>
        ))}
      </div>
    );
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
        <div style={{ display: "flex", flexDirection: "row" }} key={index}>
          {generateRow(item, index)}
        </div>
      ))}
    </div>
  );
};

export default Excel;
