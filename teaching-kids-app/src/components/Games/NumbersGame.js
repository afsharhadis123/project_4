import React, { useState, useEffect } from "react";
import BackgroundSound from '../Audio/Monkeys.mp3';
import '../styles/NumberGame.css';

const NumberLearningGame = () => {
  const [numberSequence, setNumberSequence] = useState([]);
  const [currentNumberIndex, setCurrentNumberIndex] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [backgroundMusic, setBackgroundMusic] = useState(null);

  const startTimer = () => {
    const id = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    setIntervalId(id);
  };

  const handleReset = () => {
    getRandomNumber(); // Use getRandomNumber instead of setNumberSequence
    setCurrentNumberIndex(0);
    setGameCompleted(false);
    setSelectedAnswer(null);
    setMessage("");
    setScore(0);
    setTimer(0);
    clearInterval(intervalId);
    startTimer();
  };

  const getRandomNumber = () => {
    const numbers = [];
    for (let i = 1; i <= 10; i++) {
      numbers.push(i);
    }
    const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
    setNumberSequence(shuffledNumbers);
  };

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

  const handleNextNumber = () => {
    if (currentNumberIndex === numberSequence.length - 1) {
      setGameCompleted(true);
    } else {
      setCurrentNumberIndex((prevIndex) => prevIndex + 1);
    }
    setSelectedAnswer(null);
    setMessage("");
  };

  useEffect(() => {
    getRandomNumber(); // Use getRandomNumber instead of setNumberSequence
    startTimer();
    return () => clearInterval(intervalId);
  }, []);

  const numberImages = {
    1: "https://www.activevista.com.au/wp-content/uploads/2021/08/belinda-f1-mini-watermelon-seed.jpg",
    2: "https://static.wixstatic.com/media/465c9c_53e5274cefaa44c6baf33e8ff2e42017~mv2.png/v1/fill/w_1080,h_1080,al_c/465c9c_53e5274cefaa44c6baf33e8ff2e42017~mv2.png",
    3: "https://media.istockphoto.com/id/538653968/vector/banana.jpg?s=612x612&w=0&k=20&c=X_OQiAC1FVR7uxTapLEUv4Tla2JqAGgUvcWwcqewdyI=",
    4: "https://static.freshtohome.com/media/catalog/product/cache/1/image/18ae109e34f485bd0b0c075abec96b2e/k/i/kiwi-4.jpg",
    5: "https://www.humphreysfarm.com/productcart/pc/catalog/4558-lg.jpg",
    6: "https://i5.walmartimages.com/asr/2a38a714-dc5b-4565-b170-0f0d0fdfa4bd_1.299ca3609f3b9ee0583fb7894f9dce41.jpeg",
    7: "https://media.istockphoto.com/id/578601936/photo/seven-peaches.jpg?s=612x612&w=0&k=20&c=fR1XRhA1diHr8-ncHV6zje1CmrtkTMgZdVRzxZppr1U=",
    8: "https://kirbiecravings.com/wp-content/uploads/2017/04/baked-shrimp-stuffed-avocado-7-700x843.jpg",
    9: "https://qvc.scene7.com/is/image/QVC/h/98/h206298.001?$aempdlarge$",
    10: "https://i0.wp.com/outwardhound.com/furtropolis/wp-content/uploads/2022/06/blueberries.jpg?resize=640%2C335&ssl=1",
  };

  const renderNumberBoxes = () => {
    const numberBoxes = [];
    for (let i = 1; i <= 10; i++) {
      numberBoxes.push(
        <button
          key={i}
          className={`number-box ${selectedAnswer === i ? "selected" : ""}`}
          onClick={() => {
            setSelectedAnswer(i);
            if (i === numberSequence[currentNumberIndex]) {
              setMessage("Good job! That's the correct answer.");
              setScore((prevScore) => prevScore + 1);
              handleNextNumber();
            } else {
              setMessage("Try again. Your answer is incorrect.");
            }
          }}
        >
          {i}
        </button>
      );
    }
    return numberBoxes;
  };

  return (
    <div className="game-container1">
      <img
        className="background-image1"
        src="https://vettastage.genesis-perpetual.net.au/exfiles/dino.png"
        alt="Game Background"
      />
      <div className="container1">
        <h1>Number Learning Game</h1>
        <button onClick={toggleBackgroundMusic}>
          {backgroundMusic && !backgroundMusic.paused ? "Music Off" : "Music On"}
        </button>
        <div className="image-container1">
          <img
            src={numberImages[numberSequence[currentNumberIndex]]}
            alt={`Number ${numberSequence[currentNumberIndex]}`}
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <p>How many fruits do you see?</p>
        <div className="number-boxes-container">{renderNumberBoxes()}</div>
        {message && <p>{message}</p>}
        {gameCompleted && (
          <div className="game-completed1">
            <p>Congratulations! You completed the game.</p>
            <button onClick={handleReset}>Play Again</button>
          </div>
        )}
        <p className="score">Score: {score}</p>
        <p>Timer: {timer} seconds</p>
      </div>
    </div>
  );
};

export default NumberLearningGame;