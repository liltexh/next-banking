import React from "react";
import EmblaCarousel from "./slider/EmblaCarousel";
import "@/app/styles/EmblaCarousel.css";
function FeatureSlider() {
	const OPTIONS: EmblaOptionsType = { loop: true };
	const SLIDE_COUNT = 5;
	const SLIDES = [
		"/history-img-04.jpg",
		"/history-img-03.jpg",
		"/history-img-02.jpg",
		"/history-img-02.jpg",
		"/history-img-02.jpg",
	];
	return (
		<section className="mt-24 w-full">
			<div className="w-full">
				<EmblaCarousel
					slides={SLIDES}
					options={OPTIONS}
				/>
			</div>
		</section>
	);
}

export default FeatureSlider;
