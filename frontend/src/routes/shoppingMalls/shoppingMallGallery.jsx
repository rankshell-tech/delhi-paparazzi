import { useEffect, useState } from "react";
import "./shoppingMallGallery.css";

export default function ShoppingMallGallery() {
  const [images, setImages] = useState([]);

  const imageNumber = 20;

  useEffect(() => {
    const fetchImageLinks = async () => {
      function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      const createImageLink = (imageNumber) => {
        return `https://picsum.photos/${randomIntFromInterval(
          200,
          300
        )}/${randomIntFromInterval(200, 300)}?random=${imageNumber}`;
      };

      let imageLinks = [];
      for (let i = 0; i < imageNumber; i++) {
        imageLinks.push(createImageLink(i));
      }

      setImages(imageLinks);
    };

    fetchImageLinks();
  }, []);

  console.log(images);

  return (
    <div className="shoppingMallGalleryImages">
      {images.map((image, index) => {
        return (
          <div key={index} className="images">
            <img src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
}
