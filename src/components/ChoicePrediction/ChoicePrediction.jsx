import css from "./ChoicePrediction.module.css";
import PredictionCard from "../PredictionCard/PredictionCard";
import backSide from "../../img/back-side.jpg";
import { useState } from "react";
import predictionCard from '../predictionCard.json';

// Функція для вибору випадкових двох карт
const getRandomCards = () => {
  const shuffled = [...predictionCard].sort(() => 0.5 - Math.random()); // Перемішуємо масив
  return shuffled.slice(0, 2); // Вибираємо перші два елементи
};

export default function ChoicePrediction() {
  const [showCards, setShowCards] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);

  const handleClick = () => {
    setShowCards(true);
    setSelectedCard(null);
    setCards(getRandomCards());
  };

  // Обробник кліку для закриття карти
  const handleCloseCard = () => {
    setShowCards(false);
    setSelectedCard(null);
  };

  return (
    <div className="section">
      <div className={css.div}>
        <h1 className={css.text}>Prediction for you</h1>

        {!showCards && (
          <><p className={css.smole}>get predictions only once a day to avoid danger</p>
          <button className={css.button} onClick={handleClick}>Get predictions</button>
          </>
        )}

        {showCards && (
          <div className={css.cardContainer}>
            {cards.map((card) =>
              selectedCard === null ? (
                <img
                  className={css.cards}
                  key={card.id}
                  src={backSide}
                  alt="Back Side"
                  width={250}
                  height={410}
                  onClick={() => setSelectedCard(card.id)}
                />
              ) : selectedCard === card.id ? (
                <PredictionCard key={card.id} cart={card} onClose={handleCloseCard} />
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
}
