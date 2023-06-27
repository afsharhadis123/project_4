import React, { useState, useEffect } from "react";
import BackgroundSound from '../Audio/freemusic.mp3';
import '../styles/PictureGame.css';

const words = [
  { name: "🍎", image: "https://img.taste.com.au/g60Nr8OS/taste/2016/11/ten-secrets-of-fuji-apples-64754-1.jpg" },
  { name: "🐱", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YFujrJBp6VFaiVZyjRa8avT6PBw-v2IAhw&usqp=CAU" },
  { name: "🐶", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5ElLfEoTtQIyOm38WiEMesfB6mUaP8Dl6g&usqp=CAU" },
  { name: "✈️", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRI8HbAQ4hcKj5Zl66BMebInSU2OJKPQsyoQ&usqp=CAU" },
  { name: "🚗", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcQiLvi5vHtvz-1W7lCw5EPL_1MZ81Y1ydQ&usqp=CAU" },
  { name: "🌸", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHp0lXjIfMX9OzFqEjyfPEmAIdvsYIZbD8eQ&usqp=CAU" },
  // Add more words, images, and audio as needed
];

const PicturesGame = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [matchedWords, setMatchedWords] = useState([]);
  const [randomWordNames, setRandomWordNames] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [score, setScore] = useState(0);
  const [backgroundMusic, setBackgroundMusic] = useState(null);

  useEffect(() => {
    setRandomWordNames(getRandomWordNames());
  }, []);

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

  const getRandomWordNames = () => {
    const shuffledWordNames = words.map((word) => word.name).sort(() => 0.1 - Math.random());
    return shuffledWordNames;
  };

  const handleWordClick = (word) => {
    setSelectedWord(word);
    setFeedbackMessage("");
  };

  const handleMatchClick = (wordName) => {
    if (selectedWord && selectedWord.name === wordName) {
      setMatchedWords((prevMatchedWords) => [...prevMatchedWords, wordName]);
      setSelectedWord(null);
      setFeedbackMessage("Good job!");
      setScore((prevScore) => prevScore + 1);
    } else {
      setFeedbackMessage("Try again!");
    }
  };

  const handleReset = () => {
    setSelectedWord(null);
    setMatchedWords([]);
    setRandomWordNames(getRandomWordNames());
    setFeedbackMessage("");
    setScore(0);
  };

  useEffect(() => {
    if (matchedWords.length === words.length) {
      // Game over logic or show success message
    }
  }, [matchedWords]);

  return (
    <div className="game-container">
      <div className="game-content">
        <h1>Picture Matching Game</h1>
        <button onClick={toggleBackgroundMusic}>
          {backgroundMusic && !backgroundMusic.paused ? "Music Off" : "Music On"}
        </button>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {words.map((word, index) => (
            <div
              key={index}
              onClick={() => handleWordClick(word)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "10px",
                cursor: "pointer",
                border: `2px solid ${selectedWord === word ? "black" : "transparent"}`,
              }}
            >
              <img src={word.image} alt={word.name} style={{ width: "100px", height: "100px" }} />
              <span>{word.name}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {randomWordNames.map((wordName, index) => {
           
            return (
              <button
                key={index}
                onClick={() => handleMatchClick(wordName)}
                style={{
                  width: "100px",
                  height: "50px",
                  margin: "10px",
                  cursor: "pointer",
                  border: `2px solid ${matchedWords.includes(wordName) ? "green" : "transparent"}`,
                }}
              >
                {wordName}
              </button>
            );
          })}
        </div>
        {feedbackMessage && <div style={{ textAlign: "center", marginTop: "20px" }}>{feedbackMessage}</div>}
        <button className="reset" onClick={handleReset}>Reset</button>
        <p>Score: {score}</p>
        {matchedWords.length === words.length && <div>All games completed!</div>}
      </div>
      <img className="background-image" src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/35594.png" alt="Game Background" />
    </div>
  );
};

export default PicturesGame;