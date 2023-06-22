import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import Spline from "@splinetool/react-spline";

const SplinePage = () => {
	return (
		<DefaultLayout>
			<Spline
				scene='https://prod.spline.design/RTzpreSzQfAi-RaP/scene.splinecode'
				className='spline-scene'
			/>
		</DefaultLayout>
	);
};
export default SplinePage;