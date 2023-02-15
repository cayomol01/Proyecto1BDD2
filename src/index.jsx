import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Contain from "./Components/Container/Contain"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"

import "./main.css"


reactDom.render(
  <VideoPlayer Titulo="titulo" link="https://www.youtube.com/embed/b32xdCkVW28"/>,

  document.getElementById("root"),

);