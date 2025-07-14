"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Button02 from "./Button02";
import Button01 from "./Button01";
import Button03 from "./Button03";

import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
type bankCategories = {
	type: string;
	heading: string;
	preview: string;
	link: string;
};
type heroContext = {
	image: string;
	header: string;
	paragraph: string;
};
const BANK_CATEGORIES: bankCategories[] = [
	{
		type: "Fixed Deposit",
		heading: "Fixed Returns with Peace of Mind",
		preview: "Must explain to you how work mistaken give you complete guide.",
		link: "#",
	},
	{
		type: "Current Account",
		heading: "Banking Solutions for a Business",
		preview:
			"No one rejects dislikes avoids pleasures because it is pleasure trivial.",
		link: "#",
	},
	{
		type: "Mutual Funds",
		heading: "Our Strategies for Better Returns",
		preview:
			"Except obtain some advantages from it But who has any right to find enjoy.",
		link: "#",
	},
];
const HeroContext: heroContext[] = [
	{
		image: "/images/hero01.jpg",
		header: "An Innovative Framework For Your Financial Solutions",
		paragraph:
			"Weakness of will which is the same as thier duty through saying through shrinking from toil",
	},
	{
		image: "/images/hero02.jpg",
		header: "Banking Made Easy ,More Secure & More Personal",

		paragraph:
			"Weakness of will which is the same as thier duty through saying through shrinking from toil",
	},
	{
		image: "/images/hero03.jpg",
		header: "Bank With The Happiest Customers In The World",
		paragraph:
			"Weakness of will which is the same as thier duty through saying through shrinking from toil",
	},
];

function Hero() {
	const [sIndex, setSIndex] = useState(0);
	const [animateOut, setAnimateOut] = useState(false);
	const swapHeroImg = (action: string) => {
		let numb = sIndex;
		action == "back" ? numb-- : numb++;
		if (numb > HeroContext.length - 1) {
			setSIndex(0);
		} else if (numb < 0) {
			setSIndex(HeroContext.length - 1);
		} else {
			setSIndex(numb);
		}
		setAnimateOut(true);
	};

	useEffect(() => {
		setAnimateOut(true);
		setTimeout(() => {
			setAnimateOut(false);
		}, 200);
	}, []);
	return (
		<div className="bg-beige-100 w-full pt-1 md:pt-0">
			<section className=" text-white lg:h-dvh main-p">
				<div className="w-full h-full relative overflow-hidden flex flex-col md:grid md:grid-cols-11 bg-gray-900 md:bg-transparent px-4 gap-y-16 py-6">
					<AnimatePresence>
						<motion.div
							key={HeroContext[sIndex].header}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.1 }}
							className="absolute inset-0 z-0 hidden md:flex "
						>
							<motion.div
								initial={{ scale: 1 }}
								animate={{ scale: 1.1 }}
								exit={{ scale: 1 }}
								transition={{ duration: 3 }}
								className="w-full h-full bg-gradient-to-r from-transparent to-black"
							>
								<Image
									src={HeroContext[sIndex].image}
									alt="#"
									fill
									className="object-cover grayscale"
								/>
							</motion.div>
						</motion.div>
					</AnimatePresence>
					<motion.div
						key={HeroContext[sIndex].header}
						initial={false}
						className="flex flex-col gap-8 lg:gap-6 md:col-span-7 md:order-2 md:w-[90%] my-auto bg-black/20 backdrop-blur-sm  shadow-white/30 shadow-inner py-8 px-4 lg:px-8 overflow-hidden "
					>
						<motion.h3
							initial={{ y: -80, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -80 }}
							transition={{ duration: 1 }}
							className="relative text-5xl md:text-7xl"
						>
							{HeroContext[sIndex].header}
						</motion.h3>
						<motion.p
							initial={{ x: 200 }}
							animate={{ x: 0 }}
							exit={{ x: 200 }}
							transition={{ duration: 1 }}
							className="text-xl opacity-75"
						>
							{HeroContext[sIndex].paragraph}
						</motion.p>
						<motion.span
							initial={{ y: 160, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 160 }}
							transition={{ duration: 2 }}
						>
							<Button02 texts={"Make An Appointment"} />
						</motion.span>
					</motion.div>
					<div className="flex gap-4 col-span-4 items-end relative z-20">
						<div className="flex flex-col gap-2.5 text-center">
							<Button01
								texts="Make Payment"
								className="bg-primary-600 hover:scale-95 transition-all duration-200 text-white/80"
							/>
							<Button01
								texts="Make Enquiry"
								className="bg-primary-500 hover:scale-95 transition-all duration-200 text-white/80"
							/>
						</div>
						<div className="hidden md:flex gap-2.5">
							<Button03
								className="group hover:bg-primary-500 transition-colors duration-500"
								doClick={() => {
									swapHeroImg("back");
								}}
							>
								<ArrowLeft className="text-black w-10 group-hover:text-white" />
							</Button03>
							<Button03
								className="group hover:bg-primary-500 transition-colors duration-500"
								doClick={() => {
									swapHeroImg("next");
								}}
							>
								<ArrowRight className="text-black w-10 group-hover:text-white" />
							</Button03>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col text-center main-p main-py gap-12">
				<div className="w-full flex flex-col justify-center items-center gap-4">
					<h1 className="text-5xl font-semibold">Bank for a Better Tomorrow</h1>
					<p className="text-xl text-black/70 px-8">
						Committed to helping our customers succeed.
					</p>
				</div>
				<div className="flex flex-col md:grid md:grid-cols-2 gap-y-16 my-10">
					{BANK_CATEGORIES.map((categorie, idx) => {
						return (
							<div
								className="relative flex flex-col justify-center items-center gap-y-12 z-0 last:col-span-2 m-auto"
								key={idx}
							>
								<div className="flex flex-col gap-4 justify-center items-center">
									<span className="relative flex justify-center items-start text-2xl font-semibold text-black/30 mb-2 z-0 w-40 aspect-square pt-10">
										<Image
											src="/images/counting-box-bg.png"
											alt=""
											fill
											className="absolute top-0 w-full h-full object-contain -z-10"
										/>
										0{idx + 1}
									</span>
									<span className="text-primary-500 text-xl">
										{categorie.type}
									</span>
									<h4 className="text-2xl">{categorie.heading}</h4>
									<p className="text-black/50 px-10">{categorie.preview}</p>
								</div>
								<div>
									<button className="text-lg flex justify-evenly items-center gap-1.5 hover:text-primary-500 group transition-colors duration-300">
										<Link
											href={categorie.link}
											className="-translate-y-0.5"
										>
											Read More
										</Link>
										<span className="relative w-8 aspect-square rounded-full z-0 overflow-hidden flex justify-center items-center after:absolute after:-z-10 after:bg-primary-500 after:w-0 after:h-0 after:rounded-full group-hover:text-white group-hover:after:w-full group-hover:after:h-full after:transition-all after:duration-300">
											<Plus
												className="w-4 group-hover:rounded-full"
												strokeWidth={3}
											/>
										</span>
									</button>
								</div>
								<span className="absolute bottom-0 left-0 -z-10">
									<img
										src="/images/petal01.png"
										alt=""
										className="h-48 aspect-auto translate-y-4"
									/>
									<img
										src="/images/petal02.png"
										alt=""
										className="w-48 aspect-auto rotate-[14deg] translate-x-10"
									/>
								</span>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default Hero;
