import React from "react";

const Logo = require("../assets/images/logo.png").default;

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <a href="/">
          <img src={Logo} className="logo" alt="logo" />
        </a>
      </div>
      <div className="header-menu-container">
        <ul className="menu-ul">
          {MenuItem.map((item) => {
            return (
              <li key={item.id} about={item.title} className="menu-li">
                <a className="menu-link" href={item.target}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const MenuItem = [
  {
    id: 1,
    title: "stories",
    target: "/stories",
  },
  {
    id: 2,
    title: "events",
    target: "/events",
  },
  {
    id: 3,
    title: "places",
    target: "/places",
  },
  {
    id: 4,
    title: "boards",
    target: "/boards",
  },
];
