"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import "@/app/styles/EmblaCarousel.css";
import {
	PrevButton,
	NextButton,
	usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
	slides: any;
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		<section className="embla">
			<div
				className="embla__viewport"
				ref={emblaRef}
			>
				<div className="embla__container">
					{slides.map((slide: string, index: number) => (
						<div
							className="embla__slide p-6 pr-16"
							key={index}
						>
							<div className=" bg-white shadow-md">
								<div className="w-full flex flex-col justify-center items-center m-auto relative">
									<img
										src="/history-img-03.jpg"
										alt=""
										className="w-full aspect-square object-cover"
									/>
									<span className="bg-gradient-to-r from-sky-700 to-sky-600 text-white w-full text-xl absolute bottom-4 -right-10 p-4">
										lorem iohiwdabn{" "}
									</span>
								</div>
								<div className="w-full flex flex-col justify-center items-center m-auto p-8">
									<p className="text-black/60 text-lg">
										Lorem ipsum dolor sit, amet consectetur adipisiing elit.
										jxbqihiw iwhfj whfhie heiwfheifh
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="embla__controls">
				<div className="embla__buttons">
					<PrevButton
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
					/>
					<NextButton
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
					/>
				</div>

				<div className="embla__dots">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={"embla__dot".concat(
								index === selectedIndex ? " embla__dot--selected" : ""
							)}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default EmblaCarousel;
