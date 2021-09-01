import React, { useState, useEffect } from "react";
import BackArrow from "../assets/images/back.png";
import NextArrow from "../assets/images/next.png";

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [showNavigator, setShowNavigator] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === 5) {
        setActiveIndex(1);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);
  const Move = (where) => {
    if (where === "next") {
      if (activeIndex === 5) {
        setActiveIndex(1);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    } else {
      if (activeIndex === 1) {
        setActiveIndex(5);
      } else {
        setActiveIndex(activeIndex - 1);
      }
    }
  };
  return (
    <div
      className="slider"
      onMouseEnter={() => setShowNavigator(true)}
      onMouseLeave={() => setShowNavigator(false)}
    >
      {showNavigator ? (
        <div className="slider-back-navigator" onClick={() => Move("back")}>
          <img src={BackArrow} alt="back" />
        </div>
      ) : null}
      {showNavigator ? (
        <div className="slider-next-navigator" onClick={() => Move("next")}>
          <img src={NextArrow} alt="next" />
        </div>
      ) : null}
      {SliderItem.map((item) => {
        return (
          <div
            key={item.id}
            className={[
              "slider-container",
              activeIndex === item.id ? "show" : "hide",
            ].join(" ")}
          >
            <div
              className={[
                "slider-text-box",
                activeIndex === item.id ? "fade-in-slider" : "fade-out-slider",
              ].join(" ")}
            >
              <p className="slider-subtitle">
                {item.subTitle} {activeIndex}
              </p>
              <h2 className="slider-title">{item.title}</h2>
              <p className="slider-description">{item.description}</p>
            </div>
            <img
              className={[
                "slider-image skeleton",
                activeIndex === item.id ? "fade-in-slider" : "fade-out-slider",
              ].join(" ")}
              src={`${item.image}?${item.id}`}
              alt={item.title}
            />
          </div>
        );
      })}
      <div className="slider-counter">
        <p style={{ color: "#8dc2f4" }}>{activeIndex}</p>
        <p style={{ color: "gray" }}>/</p>
        <p style={{ color: "black" }}>{SliderItem.length}</p>
      </div>
    </div>
  );
};

const SliderItem = [
  {
    id: 1,
    title: "beautiful escape",
    subTitle: "Your",
    description:
      "one of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.",
    image: "https://source.unsplash.com/user/jeremybishop/1920x1080",
  },
  {
    id: 2,
    title: "beautiful escape",
    subTitle: "Your",
    description:
      "one of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.",
    image: "https://source.unsplash.com/user/jeremybishop/1920x1080",
  },
  {
    id: 3,
    title: "beautiful escape",
    subTitle: "Your",
    description:
      "one of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.",
    image: "https://source.unsplash.com/user/jeremybishop/1920x1080",
  },
  {
    id: 4,
    title: "beautiful escape",
    subTitle: "Your",
    description:
      "one of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.",
    image: "https://source.unsplash.com/user/jeremybishop/1920x1080",
  },
  {
    id: 5,
    title: "beautiful escape",
    subTitle: "Your",
    description:
      "one of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.",
    image: "https://source.unsplash.com/user/jeremybishop/1920x1080",
  },
];
