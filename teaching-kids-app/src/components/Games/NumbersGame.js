import React, { useState, useEffect } from "react";
import BackgroundSound from '../Audio/Monkeys.mp3';
import '../styles/NumberGame.css';

const NumberLearningGame = () => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
    const [backgroundMusic, setBackgroundMusic] = useState(null);

  const startTimer = () => {
    const id = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 2000);
    setIntervalId(id);
  };

  const handleReset = () => {
    setCurrentNumber(1);
    setGameCompleted(false);
    setUserAnswer("");
    setMessage("");
    setScore(0);
    setTimer(0);
    clearInterval(intervalId);
    startTimer();
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
    if (currentNumber === 10) {
      setGameCompleted(true);
    } else {
      setCurrentNumber((prevNumber) => prevNumber + 1);
    }
    setUserAnswer("");
    setMessage("");
  };

  const checkAnswer = () => {
    const answer = parseInt(userAnswer);
    if (answer === currentNumber) {
      setMessage("Good job! That's the correct answer.");
      setScore((prevScore) => prevScore + 1);
    } else {
      setMessage("Try again. Your answer is incorrect.");
    }
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalId);
  }, []);

  // Define an object with relevant number images
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
    // Add more number-image pairs as needed
  };

  return (
        <div className="game-container1">
      <img className="background-image1" src="https://vettastage.genesis-perpetual.net.au/exfiles/dino.png" alt="Game Background" />
      <div className="container1">
        <h1>Number Learning Game</h1>
        <button onClick={toggleBackgroundMusic}>
          {backgroundMusic && !backgroundMusic.paused ? "Music Off" : "Music On"}
        </button>
        <div className="image-container1">
          <img
            src={numberImages[currentNumber]}
            alt={`Number ${currentNumber}`}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <p>How many fruits do you see?</p>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button onClick={checkAnswer}>Check Answer</button>
        {message && <p>{message}</p>}
        {gameCompleted && <p>Congratulations! You completed the game.</p>}
        <button onClick={handleNextNumber}>Next Number</button>
        <button onClick={handleReset}>Reset</button>
        <p className="score">Score: {score}</p>
        <p>Timer: {timer} seconds</p>
        {gameCompleted && (
          <div className="game-completed1">
            <p>Congratulations! You completed the game.</p>
            <button onClick={handleReset}>Play Again</button>
          </div>
        )}
      </div>
    </div>
  );
};


export default NumberLearningGame;