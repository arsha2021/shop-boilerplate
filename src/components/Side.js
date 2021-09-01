import React from "react";

export default function Side({ id }) {
  if (id === 1) {
    return (
      <div className="side-container">
        <div>
          <p className="side-vertical-text">first surfing magazine</p>
        </div>
        <div>
          <ul className="side-social-menu">
            {SlideSocial.map((item) => {
              return (
                <li key={item.id} className="side-social-menu-item">
                  <a
                    href={item.target}
                    target="_blank"
                    rel="noreferrer"
                    className="side-social-menu-link"
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="side-social-menu-img"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="side-container">
        <p className="side-vertical-text">surf camps</p>
      </div>
    );
  }
}

const SlideSocial = [
  {
    id: 1,
    icon: require("../assets/images/tumblr.png").default,
    target: "https://www.tumblr.com/",
    title: "tumblr",
  },
  {
    id: 2,
    icon: require("../assets/images/twitter.png").default,
    target: "https://www.twitter.com/",
    title: "twitter",
  },
  {
    id: 3,
    icon: require("../assets/images/vimeo.png").default,
    target: "https://www.vimeo.com/",
    title: "vimeo",
  },
];
