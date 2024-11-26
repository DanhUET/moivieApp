/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const ImageComponent = ({ src, width, height, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=No image`,
  );
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
    };
    return () => {
      img.onload = null;
    };
  }, [src]);
  return (
    <img
      src={currentSrc}
      alt=""
      className={
        currentSrc === src || !src ? className : `${className} blur-md`
      }
      width={width}
      height={height}
      loading="lazy"
    />
  );
};
export default ImageComponent;
