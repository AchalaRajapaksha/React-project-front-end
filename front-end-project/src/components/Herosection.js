import React from 'react';
import { ReactComponent as Andykelly } from "./images/Andykelly.svg";
import Textbox from "./Textbox";
import "./Herosection.css";

export default function Herosection() {
  return (
    <>
      <Textbox />
      <div className="Herosection">
        <Andykelly className="Andykelly" />
      </div>
    </>
  );
}
