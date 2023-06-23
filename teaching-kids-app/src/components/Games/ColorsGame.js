import React, { useState, useEffect } from "react";

const games = {
  colors: [
    { name: "❤️ Red", hexCode: "#FF0000" },
    { name: "💙 Blue", hexCode: "#0000FF" },
    { name: "💚 Green", hexCode: "#00FF00" },
    { name: "💛 Yellow", hexCode: "#FFFF00" },
    { name: "💜 Purple", hexCode: "#A020F0" },
    { name: "🧡 Orange ", hexCode: "#FFA500" },
  ],
};

const GamesPage = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [matchedColors, setMatchedColors] = useState([]);
  const [randomColorNames, setRandomColorNames] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false); // New state variable

  useEffect(() => {
    setRandomColorNames(getRandomColorNames());
  }, [currentGameIndex]);

  const getRandomColorNames = () => {
    const colors = games.colors || [];
    const shuffledColorNames = colors.map((color) => color.name).sort(() => 0.1 - Math.random());
    return shuffledColorNames;
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setFeedbackMessage("");
  };

  const handleColorNameClick = (colorName) => {
    if (selectedColor && selectedColor.name === colorName) {
      setMatchedColors((prevMatchedColors) => [...prevMatchedColors, colorName]);
      setSelectedColor(null);
      setFeedbackMessage("Good job!");
      setScore((prevScore) => prevScore + 1);
    } else {
      setFeedbackMessage("Try again!");
    }
    
    if (matchedColors.length === games.colors.length - 1) {
      setGameCompleted(true);
      setFeedbackMessage("Congratulations! You completed the game.");
    }
  };

  const handleReset = () => {
    setSelectedColor(null);
    setMatchedColors([]);
    setRandomColorNames(getRandomColorNames());
    setFeedbackMessage("");
    setScore(0);
    setGameCompleted(false);
  };

  const handleNextGame = () => {
    setCurrentGameIndex((prevIndex) => prevIndex + 1);
    setSelectedColor(null);
    setMatchedColors([]);
    setRandomColorNames(getRandomColorNames());
    setFeedbackMessage("");
    setGameCompleted(false);
  };

  return (
    <div>
      <h2>Color Matching Game</h2>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {games.colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleColorClick(color)}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: color.hexCode,
              margin: "10px",
              cursor: "pointer",
              border: `2px solid ${selectedColor === color ? "black" : "transparent"}`,
            }}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {randomColorNames.map((colorName, index) => {
          const color = games.colors.find((color) => color.name === colorName);
          return (
            <button
              key={index}
              onClick={() => handleColorNameClick(colorName)}
              style={{
                width: "100px",
                height: "50px",
                margin: "10px",
                cursor: "pointer",
                border: `2px solid ${matchedColors.includes(colorName) ? "green" : "transparent"}`,
                color: color?.hexCode,
              }}
            >
              {colorName}
            </button>
          );
        })}
      </div>
      {feedbackMessage && <div style={{ textAlign: "center", marginTop: "20px" }}>{feedbackMessage}</div>}
      <button onClick={handleReset}>Reset</button>
      <p>Score: {score}</p>
      {/* {gameCompleted && (
        // <div>
        //   <p>Congratulations! You completed the game.</p>
        //   {currentGameIndex < games.colors.length - 1 && <button onClick={handleNextGame}>Next Game</button>}
        // </div>
      )} */}
      {currentGameIndex >= games.colors.length && <div>All games completed!</div>}
    </div>
  );
};

export default GamesPage;