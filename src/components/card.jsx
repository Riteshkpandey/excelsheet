import React from "react";

const Card = ({ title, bgcolor }) => {
  return <div className={`${bgcolor} card`}>{title}</div>;
};

export default Card;
