import React from "react";
import Photo from "./Photo";

function Photos({ photos }) {
  return (
    <div className="PhotosCon">
      <h1 className="menuTitle">Our Photos</h1>
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

export default Photos;
