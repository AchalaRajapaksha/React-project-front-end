import React from 'react';
import { ReactComponent as Andykelly } from "./images/Andykelly.svg";
import Textbox from "./Textbox";
import "./Herosection.css";

export default function Herosection() {
  return (
    <>
      <div className="Herosection">
        <Andykelly className="Andykelly" />
      </div>
      <div className="Textb">
        <Textbox />
      </div>
    </>
  );
}
