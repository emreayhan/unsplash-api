import React from "react";
import "./imageList.css";
import ImageCard from "./imageCard";
const ImageList = props => {
  return (
    <div className="image-list">
      {/* props.image.map ( el yerine direk id ve urls tanımladık boylece altta cağırırken de el.id yerine sadece id yazabiliyoruz.) */}

      {props.images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
