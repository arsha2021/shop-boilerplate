/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../assets/images/logo.png";
import Vimeo from "../assets/images/vimeo.png";
import Tumblr from "../assets/images/tumblr.png";
import Twitter from "../assets/images/twitter.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="footer-menu-container">
        <ul className="footer-menu-ul">
          {MenuItem.map((item) => {
            return (
              <li key={item.id} about={item.title} className="footer-menu-li">
                <a className="footer-menu-link" href={item.target}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footer-menu-container">
        <ul className="footer-menu-ul">
          <li className="footer-menu-li">
            <a className="footer-menu-link" href="#">
              <img src={Tumblr} alt="tumblr" />
            </a>
          </li>
          <li className="footer-menu-li">
            <a className="footer-menu-link" href="#">
              <img src={Twitter} alt="Twitter" />
            </a>
          </li>
          <li className="footer-menu-li">
            <a className="footer-menu-link" href="#">
              <img src={Vimeo} alt="Vimeo" />
            </a>
          </li>
        </ul>
      </div>
      <p>
        made with love{" "}
        <a href="http://alireza-shahsavari.ir" target="_blank" rel="noreferrer">
          A.R.Shahsavari
        </a>
      </p>
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
