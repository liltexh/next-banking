import React from "react";
import FeatureSlider from "./FeatureSlider";

type PropType = {
	className?: String;
};

const Feature01: React.FC<PropType> = (props) => {
	return (
		<>
			<section className="overflow-x-hidden w-full text-center main-py main-p gap">
				<div className="w-full flex flex-col justify-center items-center -4">
					<h3 className="text-5xl font-semibold">Grow Your Wealth Secure</h3>
					<p className="text-lg text-black/60">
						Dont just make a deposit, make an investment today.
					</p>
				</div>
				<div>
					<FeatureSlider />
				</div>
			</section>
		</>
	);
};

export default Feature01;
