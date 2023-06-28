import React, { useState, useEffect } from "react";
import RedSound from '../Audio/red.mp3';
import BlueSound from '../Audio/blue.mp3';
import YellowSound from '../Audio/yellow.mp3';
import GreenSound from '../Audio/green.mp3';
import PurpleSound from '../Audio/purple.mp3';
import OrangeSound from '../Audio/orange.mp3';
import BackgroundSound from '../Audio/lazy-loop.mp3';
import "../styles/ColorGame.css";

const games = {
  colors: [
    { name: "❤️ Red", hexCode: "#FF0000", audio: RedSound },
    { name: "💙 Blue", hexCode: "#0000FF", audio: BlueSound },
    { name: "💚 Green", hexCode: "#00FF00", audio: GreenSound },
    { name: "💛 Yellow", hexCode: "#FFFF00", audio: YellowSound },
    { name: "💜 Purple", hexCode: "#A020F0", audio: PurpleSound },
    { name: "🧡 Orange ", hexCode: "#FFA500", audio: OrangeSound },
  ],
};

const ColorsGame = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [matchedColors, setMatchedColors] = useState([]);
  const [randomColorNames, setRandomColorNames] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [backgroundMusic, setBackgroundMusic] = useState(null);

  useEffect(() => {
    const audio = new Audio(BackgroundSound);
    audio.loop = true;
    setBackgroundMusic(audio);
  }, []);

  const playBackgroundMusic = () => {
    if (backgroundMusic) {
      backgroundMusic.play();
    }
  };

  const pauseBackgroundMusic = () => {
    if (backgroundMusic) {
      backgroundMusic.pause();
    }
  };

  const toggleBackgroundMusic = () => {
    if (backgroundMusic && backgroundMusic.paused) {
      playBackgroundMusic();
    } else {
      pauseBackgroundMusic();
    }
  };

  useEffect(() => {
    setRandomColorNames(getRandomColorNames());
  }, []);

  const getRandomColorNames = () => {
    const colors = games.colors || [];
    const shuffledColorNames = colors
      .map((color) => color.name)
      .sort(() => 0.1 - Math.random());
    return shuffledColorNames;
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setFeedbackMessage("");
    playAudio(color.audio);
  };

  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  const handleColorNameClick = (colorName) => {
  if (selectedColor && selectedColor.name === colorName) {
    if (!matchedColors.includes(colorName)) {
      setMatchedColors((prevMatchedColors) => [...prevMatchedColors, colorName]);
      setSelectedColor(null);
      setFeedbackMessage("Good job!");
      setScore((prevScore) => prevScore + 1);
    } else {
      setFeedbackMessage("You've already matched this color!");
    }
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

  return (
    <div className="game-container2">
      <h2>Color Matching Game</h2>
      <button onClick={toggleBackgroundMusic}>
          {backgroundMusic && !backgroundMusic.paused ? "Music Off" : "Music On"}
        </button>
      <div className="container2">
        {games.colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleColorClick(color)}
            className={`image-container2 ${selectedColor === color ? "selected" : ""}`}
            style={{ backgroundColor: color.hexCode }}
          />
        ))}
      </div>
      <div className="background-image2" />

      <div className="container2">
        {randomColorNames.map((colorName, index) => (
          <button
            key={index}
            onClick={() => handleColorNameClick(colorName)}
            style={{
              width: "100px",
              height: "50px",
              margin: "10px",
              cursor: "pointer",
              border: `2px solid ${matchedColors.includes(colorName) ? "green" : "transparent"}`,
            }}
          >
            {colorName}
          </button>
        ))}
      </div>
      <div className="score-container2">
        <div className="score">
          <strong>Score:</strong> {score}
        </div>
        <div className="feedback-message2">
          <strong>Feedback:</strong> {feedbackMessage}
        </div>
      </div>
      {gameCompleted && (
        <div className="game-completed2">
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default ColorsGame;