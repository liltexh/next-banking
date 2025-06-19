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
import { ArrowRight } from "lucide-react";

type slide = {
	image: string;
	header: string;
	paragraph: string;
};

type PropType = {
	slides: slide[];
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
					{slides.map((slide, index: number) => (
						<div
							className="embla__slide p-1 lg:p-6 pr-16"
							key={index}
						>
							<div className=" bg-white shadow-md  group">
								<div className="w-full flex flex-col justify-center items-center m-auto relative">
									<img
										src={slide.image}
										alt=""
										className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
									/>
									<span className="bg-gradient-to-r from-sky-700 to-sky-600 flex justify-between text-white w-full text-xl absolute bottom-4 -right-10 p-4 z-50">
										<div className="absolute bg-white/40 w-8 h-0 top-0 right-26 group-hover:h-[80%] transition-all duration-400"></div>
										<div className="absolute bg-white/40 w-8 h-0 bottom-0 right-16 group-hover:h-[80%] transition-all duration-400"></div>
										<p>{slide.header}</p>
										<ArrowRight className="-translate-x-8 group-hover:translate-0 transition-discrete duration-400" />
									</span>
								</div>
								<div className="w-full flex flex-col justify-center items-center m-auto p-8">
									<p className="text-black/60 text-lg">{slide.paragraph}</p>
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
