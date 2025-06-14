import Link from "next/link";
import React from "react";

type PropType = {
	image: string;
	texts: string;
	className?: string;
};
const SubHero: React.FC<PropType> = (props) => {
	const { image, texts, className } = props;
	return (
		<section className={`bg-beige-100 px-4 ${className}`}>
			<div
				className={`relative w-full h-[40vh] lg:h-50vh flex justify-center items-end`}
			>
				<img
					src={image}
					alt=""
					className="absolute inset-0 object-cover w-full h-full grayscale"
				/>
				<span className="relative z-10 p-4 text-4xl bg-white border-t-4 border-primary-500">
					{texts}
				</span>
			</div>
			<div className="w-full flex flex-col lg:flex-row gap-1 justify-center items-center p-8 text-black/50 text-lg">
				<Link href="/">Home</Link>
				<p>{texts}</p>
			</div>
		</section>
	);
};

export default SubHero;
