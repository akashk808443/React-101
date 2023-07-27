import React from "react";
import { Signin } from "../components/Signin";
import { Signout } from "../components/Signout";
import { Signup } from "../components/Signup";
import { Route, Routes, useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
  return (
    <h1>Login-Page
      <div>
        <button onClick={()=>navigate("SIGN-IN")}>SIGN-IN</button>
        <button onClick={()=>navigate("SIGN-OUT")}>SIGN-OUT</button>
        <button onClick={()=>navigate("SIGN-UP")}>SIGN-UP</button>
      </div>
      <div>
        <Routes>
         <Route path="SIGN-IN" element={<Signin/>}/>
         <Route path="SIGN-OUT" element={<Signout/>}/>
         <Route path="SIGN-UP" element={ <Signup/>}/>
        </Routes>
       
      </div>
    </h1>
  );
};
