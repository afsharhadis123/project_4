import DefaultLayout from "../Layout/DefaultLayout";
import Paragraph from "../Layout/Paragraph";
import "../styles/AboutPage.css";

const AboutPage = () => {
  const aboutMeParagraph = `
    Hi, I am Hadis, a passionate developer who loves CSS and front-end development!
    Dino's Wonderland is an educational app tailored specifically for children, aged 2 to 4 years old. I believe that learning should be fun, and my app offers a unique blend of entertainment and education to captivate young minds.
  `;

  return (
    <DefaultLayout>
       <div className="background-image-about" />
      <div className="about-page-container">
        
        <h1>About Page</h1>
        <Paragraph text={aboutMeParagraph} />
      </div>
     
    </DefaultLayout>
  );
};

export default AboutPage;