import React, { useState } from "react";
import Button from "./Button";
import Prev from "../assets/images/back.png";
import Next from "../assets/images/next.png";

export default function Shop() {
  const [amount, setAmount] = useState(0);
  const Move = (head) => {
    const len = ShopItem.length;
    const max = -((len - 1) * 20);
    if (head === "next") {
      if (amount !== max) {
        setAmount(amount - 20);
      }
    } else {
      if (amount !== 0) {
        setAmount(amount + 20);
      }
    }
  };
  return (
    <div className="shop-container">
      <div className="shop-header">
        <p className="shop-header-sub-title">shop</p>
        <h2 className="shop-header-title">Surfboards</h2>
      </div>
      <div className="shop-row">
        <div className="swiper-container">
          <div
            className="shop-card-container"
            style={{ transform: `translate3d(${amount}vw, 0, 0)` }}
          >
            {ShopItem.map((item) => {
              return (
                <div key={item.id} className="shop-card">
                  <div className="shop-col-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="shop-image"
                    />
                  </div>
                  <div className="shop-col-3 padding-left-10">
                    <div className="shop-info-box">
                      <p className="shop-category">{item.category}</p>
                      <h3 className="shop-model">{item.title}</h3>
                    </div>
                    <div className="shop-price-box">
                      <p className="shop-price">{item.price} $</p>
                      <Button
                        title="buy"
                        nobackground
                        click={() => console.log("clicked")}
                      />
                    </div>
                  </div>
                  <div className="board-background" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="shop-next-arrow" onClick={() => Move("next")}>
          <img src={Next} alt="next" />
        </div>
        <div className="shop-prev-arrow" onClick={() => Move("prev")}>
          <img src={Prev} alt="perv" />
        </div>
      </div>
      <div className="shop-button-container">
        <Button
          click={() => console.log("clicked")}
          nobackground
          outline
          title="show all"
        />
      </div>
    </div>
  );
}

const ShopItem = [
  {
    id: 0,
    title: "Emery NEM XF",
    category: "surfboard",
    price: "950",
    image: require("../assets/images/sample/1.png").default,
  },
  {
    id: 1,
    title: "Chilli Rare Bird",
    category: "funboard",
    price: "890",
    image: require("../assets/images/sample/2.png").default,
  },
  {
    id: 2,
    title: "Agency GROM",
    category: "funboard",
    price: "670",
    image: require("../assets/images/sample/3.png").default,
  },
  {
    id: 3,
    title: "Emery NEM XF",
    category: "surfboard",
    price: "950",
    image: require("../assets/images/sample/4.png").default,
  },
  {
    id: 4,
    title: "Emery NEM XF",
    category: "surfboard",
    price: "950",
    image: require("../assets/images/sample/5.png").default,
  },
];
