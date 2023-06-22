import { useEffect } from "react";

const Paragraph = ({ text }) => {
	useEffect(() => {
		console.log("this is going to run in the first mount");
		return () => {
			console.log("this is going to run on unmount");
		};
	}, []);

	return <p>{text}</p>;
};

export default Paragraph;