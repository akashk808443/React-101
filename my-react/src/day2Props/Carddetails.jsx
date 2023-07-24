import React from "react";
import  Card  from "./Card";
const data = {
  name: "Akash kumar",
  email: "akash@gmail.com",
  qualification: "Graduation",
  gender: "Male",
  imgURL: "https://avatars.githubusercontent.com/u/98854085?v=4",
};

 function Carddetails () {
  return (
    <>
    <Card {...data} />
    </>
  );
};
export default Carddetails;