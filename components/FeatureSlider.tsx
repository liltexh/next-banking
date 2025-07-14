import React from "react";
import EmblaCarousel from "./slider/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "@/app/styles/EmblaCarousel.css";

const SLIDES = [
	{
		image: "/images/wealth-secure-1.jpg",
		header: "Trade FX",
		paragraph:
			"Access competitive foreign exchange rates and trade globally with confidence. Manage currency conversions efficiently in real-time.",
	},
	{
		image: "/images/wealth-secure-2.jpg",
		header: "Multi Currency a/c",
		paragraph:
			"Hold and manage multiple currencies in a single account. Seamlessly transact across borders without the hassle of conversion delays.",
	},
	{
		image: "/images/wealth-secure-3.jpg",
		header: "Mutual Funds",
		paragraph:
			"Grow your wealth with expertly managed mutual funds tailored to your goals. Diversify and invest with professional insight.",
	},
	{
		image: "/images/wealth-secure-4.jpg",
		header: "Pension Schemes",
		paragraph:
			"Secure your retirement with structured pension plans. Start building a stable financial future with consistent contributions.",
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
