import React from "react";
import Button from "./Button";

export default function Camps() {
  return (
    <div>
      {CampsData.map((item) => {
        return (
          <div className="camp-block">
            {item.id % 2 === 0 ? (
              <>
                <div className="camp-col-2">
                  <img
                    src={`${item.image}?${item.id}`}
                    alt={item.title}
                    className="camp-img"
                    style={
                      item.id % 2 === 0 ? { float: "right" } : { float: "left" }
                    }
                  />
                  <div
                    className="camp-category"
                    style={item.id % 2 === 0 ? { left: 0 } : { right: 0 }}
                  >
                    <p>{item.category}</p>
                  </div>
                </div>
                <div className="camp-col-3">
                  <div className="camp-counter">
                    {item.id < 10 ? "0" + item.id : item.id}
                  </div>
                  <h2 className="camp-title">{item.title}</h2>
                  <p>{item.description}</p>
                  <Button
                    click={() => console.log("clicked")}
                    nobackground
                    outline
                    title="read more"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="camp-col-2">
                  <div className="camp-counter">
                    {item.id < 10 ? "0" + item.id : item.id}
                  </div>
                  <h2 className="camp-title">{item.title}</h2>
                  <p>{item.description}</p>
                  <Button
                    click={() => console.log("clicked")}
                    nobackground
                    outline
                    title="read more"
                  />
                </div>
                <div className="camp-col-3">
                  <img
                    src={`${item.image}?${item.id}`}
                    alt={item.title}
                    className="camp-img"
                    style={
                      item.id % 2 === 0 ? { float: "right" } : { float: "left" }
                    }
                  />
                  <div
                    className="camp-category"
                    style={item.id % 2 === 0 ? { left: 0 } : { right: 0 }}
                  >
                    <p>{item.category}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

const CampsData = [
  {
    id: 1,
    title: "surf training",
    description:
      "Voluptate pariatur non elit aliqua cillum nisi magna consectetur culpa incididunt laborum laborum ut dolor. Magna cupidatat elit eu nostrud dolor irure est voluptate ad quis ut. Sunt culpa commodo et ipsum laborum in mollit nostrud eu. Incididunt est laboris quis ullamco eiusmod magna ex dolore exercitation incididunt. Ullamco esse non et labore aute duis est ad exercitation labore quis consectetur ullamco.",
    image: "https://source.unsplash.com/user/jeremybishop",
    category: "surf camps",
  },
  {
    id: 2,
    title: "point break",
    description:
      "Ullamco ullamco eiusmod laboris adipisicing dolore eiusmod cillum laborum deserunt anim enim est consectetur mollit. Veniam laboris esse adipisicing exercitation culpa est nostrud ex. Minim cupidatat esse elit non quis ipsum amet nostrud voluptate sint magna consectetur aute. Cillum non aute nulla ad officia consectetur.",
    image: "https://source.unsplash.com/user/jeremybishop",
    category: "surf camps",
  },
];
