import React from "react";
import EmblaCarousel from "./slider/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "@/app/styles/EmblaCarousel.css";

const SLIDES = [
	{
		image: "/images/wealth-secure-1.jpg",
		header: "Trade FX",
		paragraph:
			"Cases are paerfectly  fine when you have a life to beigin we all are gappy",
	},
	{
		image: "/images/wealth-secure-2.jpg",
		header: "Multi Currency a/c",
		paragraph:
			"Cases are paerfectly  fine when you have a life to beigin we all are gappy",
	},
	{
		image: "/images/wealth-secure-3.jpg",
		header: "Mutual Funds",
		paragraph:
			"Cases are paerfectly  fine when you have a life to beigin we all are gappy",
	},
	{
		image: "/images/wealth-secure-4.jpg",
		header: "Pension Schemes",
		paragraph:
			"Cases are paerfectly  fine when you have a life to beigin we all are gappy",
	},
];

function FeatureSlider() {
	const OPTIONS: EmblaOptionsType = { loop: true };

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
