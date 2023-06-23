import React, { useState, useEffect } from "react";

const words = [
  { name: "🍎", image: "https://img.taste.com.au/g60Nr8OS/taste/2016/11/ten-secrets-of-fuji-apples-64754-1.jpg" },
  { name: "🐱", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YFujrJBp6VFaiVZyjRa8avT6PBw-v2IAhw&usqp=CAU" },
  { name: "🐶", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5ElLfEoTtQIyOm38WiEMesfB6mUaP8Dl6g&usqp=CAU" },
  { name: "✈️", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRI8HbAQ4hcKj5Zl66BMebInSU2OJKPQsyoQ&usqp=CAU" },
  { name: "🚗", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcQiLvi5vHtvz-1W7lCw5EPL_1MZ81Y1ydQ&usqp=CAU" },
  { name: "🌸", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHp0lXjIfMX9OzFqEjyfPEmAIdvsYIZbD8eQ&usqp=CAU" },
  // Add more words and images as needed
];

const GamesPage = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [matchedWords, setMatchedWords] = useState([]);
  const [randomWordNames, setRandomWordNames] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  useEffect(() => {
    setRandomWordNames(getRandomWordNames());
  }, [currentGameIndex]);

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
    } else {
      setFeedbackMessage("Try again!");
    }
  };

  const handleNextGame = () => {
    setCurrentGameIndex((prevIndex) => prevIndex + 1);
    setSelectedWord(null);
    setMatchedWords([]);
    setFeedbackMessage("");
  };

  useEffect(() => {
    if (matchedWords.length === words.length) {
      // Game over logic or show success message
    }
  }, [matchedWords]);

  return (
    <div>
      <h1>Picture Matching Game</h1>
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
          const word = words.find((word) => word.name === wordName);
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
      {feedbackMessage && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>{feedbackMessage}</div>
      )}
     
    </div>
  );
};

export default GamesPage;