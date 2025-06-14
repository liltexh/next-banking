import React from "react";
import EmblaCarousel from "./slider/EmblaCarousel";
import Link from "next/link";
import "@/app/styles/EmblaCarousel.css";
function ImageSlider() {
	const OPTIONS: EmblaOptionsType = { loop: true };
	const SLIDES = [
		"/history-img-04.jpg",
		"/history-img-03.jpg",
		"/history-img-02.jpg",
	];
	return (
		<section className="mt-24">
			<div>
				<p>
					<span>Updates:</span>Get upto 4%* on our Savings Account Balances with
					Finbank <Link href="#">More Details</Link>
				</p>
			</div>
			<div>
				<EmblaCarousel
					slides={SLIDES}
					options={OPTIONS}
				/>
			</div>
		</section>
	);
}

export default ImageSlider;
