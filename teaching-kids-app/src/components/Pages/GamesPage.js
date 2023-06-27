import React, { useState, useEffect } from "react";
import ColorsGame from "../Games/ColorsGame";
import NumbersGame from "../Games/NumbersGame";
import PicturesGame from "../Games/PicturesGame";
import Layout from "../Layout/DefaultLayout";



const GamePage = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const [gameComponents] = useState([
    ColorsGame,
    NumbersGame,
    PicturesGame,
      ]);
  const [remainingTime, setRemainingTime] = useState(30);



  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    if (remainingTime === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [remainingTime]);

  const handleNextGame = () => {
    setCurrentGameIndex((prevIndex) => prevIndex + 1);
  };

  const resetToFirstGame = () => {
    setCurrentGameIndex(0);

  };

  const CurrentGame = gameComponents[currentGameIndex];

  return (
    <Layout>
      <h1>Game Page</h1>
      <div>Remaining Time: {remainingTime} seconds</div>
      {currentGameIndex < gameComponents.length ? (
        <>
          <CurrentGame remainingTime={remainingTime} />
          <button className="next"
            onClick={handleNextGame}
            style={{
              display: "block",
              margin: "20px auto",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            Next Game
          </button>
        </>
      ) : (
        <div>All games completed!</div>
      )}
      <button className="back" onClick={resetToFirstGame}>Back To First</button>
    </Layout>
  );
};

export default GamePage;