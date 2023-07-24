import React from "react";

 function Card (props) {
  console.log(props);
  const {name, email, qualification, gender, imgURL} = props;
  return (
    <div>
      <div className="left">
        <img src={imgURL} alt="" />
      </div>
      <div className="right">
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{qualification}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
};
export default Card;
