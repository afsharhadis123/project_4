import DefaultLayout from "../Layout/DefaultLayout";
import "../styles/HomePage.css";
import Image from "../Images/cute-dinosaur.png";

const HomePage = () => {
  return (
    <DefaultLayout>
      <div className="home-page-container">
        <div className="image-container">
          <img src={Image} alt="Cute Dinosaur" />
        </div>
        <p className="introduce">Welcome to Dino's Wonderland, a magical world filled with colorful creatures and exciting adventures!
        <br/>  Join us ...</p>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;