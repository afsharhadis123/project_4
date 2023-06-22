import DefaultLayout from "../Layout/DefaultLayout";
import Paragraph from "../Layout/Paragraph";

const AboutPage = () => {
	const aboutMeParagraph = `
		Hi I am a passionate developer who loves CSS and FE development!
		Monsters's Wonderland is an educational app tailored specifically for children, aged 3 to 6 years old. We believe that learning should be fun, and our app offers a unique blend of entertainment and education to captivate young minds
	`;

	return (
		<DefaultLayout>
			<h1>About Page</h1>
			<Paragraph text={aboutMeParagraph} />
		</DefaultLayout>
	);
};

export default AboutPage;