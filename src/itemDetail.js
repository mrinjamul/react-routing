import React, { useState, useEffect } from "react";

function Item({ match }) {
  const [item, setItem] = useState({
    images: {},
  });
  //   const [images, setImages] = useState("");

  const fetchItem = async () => {
    const Item = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const items = await Item.json();
    setItem(items.data.item);
  };

  useEffect(() => {
    fetchItem();
  });

  //   const fetchImages = async () => {
  //     const data = await fetch(
  //       `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
  //     );
  //     const image = await data.json();
  //     setImages(image.data.item.images.information);
  //     console.log(images);
  //   };

  //   useEffect(() => {
  //     fetchImages();
  //   });

  return (
    <div>
      <h1>Shop Page</h1>
      <h1>{item.name} </h1>
      <div style={{ background: "gray" }}>
        <img src={item.images.information} alt="" />
      </div>
    </div>
  );
}

export default Item;
