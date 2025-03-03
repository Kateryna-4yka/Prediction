import css from "./PredictionCard.module.css";
import { useState, useEffect } from "react";

import screenshot2 from "../../img/Screenshot_2.png";
import screenshot4 from "../../img/Screenshot_4.png";
import screenshot11 from "../../img/Screenshot_11.png";
import screenshot12 from "../../img/Screenshot_12.png";
import screenshot13 from "../../img/Screenshot_13.png";
import screenshot14 from "../../img/Screenshot_14.png";
import screenshot15 from "../../img/Screenshot_15.png";
import screenshot16 from "../../img/Screenshot_16.png";
import screenshot17 from "../../img/Screenshot_17.png";
import screenshot18 from "../../img/Screenshot_18.png";
import screenshot19 from "../../img/Screenshot_19.png";
import screenshot20 from "../../img/Screenshot_20.png";
import screenshot21 from "../../img/Screenshot_21.png";
import screenshot22 from "../../img/Screenshot_22.png";
import screenshot23 from "../../img/Screenshot_23.png";
import screenshot24 from "../../img/Screenshot_24.png";
import screenshot25 from "../../img/Screenshot_25.png";
import screenshot26 from "../../img/Screenshot_26.png";
import screenshot27 from "../../img/Screenshot_27.png";
import screenshot28 from "../../img/Screenshot_28.png";

// Масив усіх картинок
const images = [
  screenshot2, screenshot4, screenshot11, screenshot12, screenshot13, screenshot14, screenshot15,
  screenshot16, screenshot17, screenshot18, screenshot19, screenshot20, screenshot21, screenshot22,
  screenshot23, screenshot24, screenshot25, screenshot26, screenshot27, screenshot28
];

export default function PredictionCard({ cart: { alt, title, text }, onClose }) {
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  return (
    <div className={css.div} onClick={onClose}> {/* Додаємо onClick для закриття */}
      <div className={css.cardtext}>
        {randomImage && (
          <div className={css["img-container"]}>
            <img className={css.img} src={randomImage} alt={alt} />
          </div>
        )}
        <h2 className={css.title}>{title}</h2>
      </div>
      <p className={css.text}>{text}</p>
    </div>
  );
}
