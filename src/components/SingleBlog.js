import React, { useState } from "react";
import Button from "./Button";
import "react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import Play from "../assets/images/play.png";

export default function SingleBlog() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="single-blog-container">
      <div className="single-blog-col">
        <img
          className="single-blog-image skeleton"
          alt="blog"
          src="https://source.unsplash.com/user/jeremybishop/1920x1080"
        />
        <div className="single-blog-box">
          <p className="single-blog-text">
            Consequat esse incididunt voluptate in sint. Non esse non aliquip
            incididunt consectetur minim consectetur dolore occaecat nisi
            ullamco enim quis mollit. Aliqua excepteur minim veniam anim
            excepteur qui cillum ad est pariatur. Eiusmod mollit pariatur tempor
            labore occaecat.
          </p>
          <Button outline click={() => console.log("clicked")} title="read more" />
        </div>
      </div>
      <div className="single-blog-col"></div>
      <div className="single-blog-video-cover" onClick={() => setIsOpen(true)}>
        <img
          className="single-blog-video-img"
          src="https://source.unsplash.com/user/jeremybishop/1920x1080?2"
          alt="video"
        />
        <img className="single-blog-video-play-button" src={Play} alt="video" />
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="ma67yOdMQfs"
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
