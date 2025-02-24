import { useState } from "react";
import css from "./Section.module.css";
import GoodLiList from "../GoodLiList/GoodLiList";
import BadLiList from "../BedList/BadList";
import goodListInfo from "../GoodLiList/goodListInfo.json";
import badListInfo from "../BedList/badList.json";
import cardBack from "../../img/card.jpg"; // Додаємо зображення для закритої картки

export default function Section() {
  const [selectedCards, setSelectedCards] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const getRandomCard = (list) => list[Math.floor(Math.random() * list.length)];

  const handleClick = () => {
    const goodCard = getRandomCard(goodListInfo);
    const badCard = getRandomCard(badListInfo);
    setSelectedCards({ good: goodCard, bad: badCard });
    setFlippedCard(null);
    setDisabled(false);
  };

  const handleFlip = (type) => {
    if (!disabled) {
      setFlippedCard(type);
      setDisabled(true);
    }
  };

  return (
    <div className="section">
      <div className={css.div} >
        <h1 className={css.text}>Prediction for you</h1>

        <button onClick={handleClick} className={css.button}>
        Get predictions
        </button>

        {selectedCards && (
          <div className={css.cards}>
            {/* Хороша картка */}
            <div
              className={`${css.card} ${flippedCard === "good" ? css.flipped : ""}`}
              onClick={() => handleFlip("good")}
            >
              {flippedCard === "good" ? (
                <GoodLiList cart={selectedCards.good} />
              ) : (
                <img src={cardBack} alt="Закрита картка" className={css.cardBack} />
              )}
            </div>

            {/* Погана картка */}
            <div
              className={`${css.card} ${flippedCard === "bad" ? css.flipped : ""}`}
              onClick={() => handleFlip("bad")}
            >
              {flippedCard === "bad" ? (
                <BadLiList cart={selectedCards.bad} />
              ) : (
                <img src={cardBack} alt="Закрита картка" className={css.cardBack} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
