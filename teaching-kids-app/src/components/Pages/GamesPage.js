import React, { useState } from "react";
import ColorsGame from "../Games/ColorsGame";
import NumbersGame from "../Games/NumbersGame";
import PicturesGame from "../Games/PicturesGame";
import Layout from "../Layout/DefaultLayout";

const GamePage = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const [gameComponents] = useState([ColorsGame, NumbersGame, PicturesGame]);
  // console.log(ColorsGame)
  
  const handleNextGame = () => {
    console.log(currentGameIndex)
    setCurrentGameIndex((prevIndex) => prevIndex + 1 );
     console.log(currentGameIndex)
  };

  
  const CurrentGame = gameComponents[currentGameIndex];
  
  return (
    <Layout>
      <h1>Game Page</h1>
      {currentGameIndex < gameComponents.length ? (
        
        <>
          <CurrentGame />
          <button onClick={handleNextGame}
          style={{ display: "block", margin: "20px auto", padding: "10px 20px", fontSize: "16px" }}>Next Game</button>
        </>
      ) : (
        <div>All games completed!</div>
      )}
    </Layout>
  );
};

export default GamePage;