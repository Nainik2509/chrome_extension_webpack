import React from "react";
import { render } from "react-dom";

const Popup = () => {
  return (
    <div>
      <h1>Hello,World</h1>
      <p>This is simple POP up.</p>
    </div>
  );
};

export default Popup;

render(<Popup />, document.getElementById("react-target"));
