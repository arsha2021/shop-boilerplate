import React from "react";

export default function Button({ title, click, outline, nobackground, blue }) {
  return (
    <div
      className={[
        "button",
        outline ? "button-outline" : null,
        nobackground ? null : "button-background",
      ].join(" ")}
      onClick={() => click()}
    >
      <p className="button-title" style={blue ? { color: "#89b8e5" } : null}>
        {title}
      </p>
    </div>
  );
}
