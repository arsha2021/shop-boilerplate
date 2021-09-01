import React, { useState } from "react";
import Submit from "../assets/images/submit.png";

export default function SingleInput() {
  const [value, setValue] = useState("");
  return (
    <div className="input-container">
      <input
        autoComplete="e-mail"
        className="simple-input"
        inputMode="email"
        placeholder="your e-mail"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <div className="input-submit-button">
        <img src={Submit} alt="submit" />
      </div>
    </div>
  );
}
