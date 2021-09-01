import React from "react";
import Button from "./Button";
import LineSeperator from "./LineSeperator";
import SingleInput from "./SingleInput";

export default function Join() {
  return (
    <div className="join-container">
      <LineSeperator />
      <h1>Join the Club</h1>
      <p>
        By better understanding the various aspect of surfing, you will improve
        faster and have more fun in the water.
      </p>
      <SingleInput />
      <div className="our-info-container">
        <div className="col-half">
          <img
            src="https://source.unsplash.com/user/jeremybishop/1920x1080"
            alt="we"
            className="our-info-image"
          />
        </div>
        <div className="col-half">
          <p className="our-camp">our camp</p>
          <h2 className="our-address">Tehran, Bahar St, no 347, floor 5</h2>
          <div className="our-camp-button-container">
            <Button
              click={() => console.log("clicked")}
              nobackground
              outline
              title="get in touch"
              blue
            />
          </div>
        </div>
      </div>
    </div>
  );
}
