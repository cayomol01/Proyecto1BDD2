import React from "react";
import reactDom from "react-dom";

import Contain from "./Components/Container/Contain"
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import "./main.css"


reactDom.render(
  <Signup />,
  document.getElementById("root"),

);