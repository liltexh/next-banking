"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { image } from "motion/react-client";
import Button02 from "./Button02";
import Button01 from "./Button01";
import Button03 from "./Button03";
import { PrevButton } from "./slider/EmblaCarouselArrowButtons";
import {
	ChevronsLeft,
	ChevronsLeftIcon,
	ChevronsLeftRight,
} from "lucide-react";
import { BackIcon, FowrardIcon } from "./CostomIcons/CostomIcons";

import { Plus } from "lucide-react";
type BankCategories = {
	type: string;
	heading: string;
	preview: string;
	link: string;
};
const BANK_CATEGORIES: BankCategories[] = [
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
const SlideImages = ["/slide-v1-3.jpg", "/slide-v1-3.jpg", "/slide-v1-3.jpg"];

function Hero() {
	const [sIndex, setSIndex] = useState(0);
	return (
		<div className="bg-beige-100">
			<section className=" text-white lg:h-dvh main-p">
				<div className="hidden lg:flex bg-primary-500 py-4 pr-[10%] justify-end items-center text-lg">
					<p>
						<span className="font-semibold">Updates: {"  "}</span>Get upto 4%*
						on our Savings Account Balances with Finbank{" "}
						<Link href="#">More Details</Link>
					</p>
				</div>
				<div className="w-full h-full relative overflow-hidden flex flex-col md:grid md:grid-cols-11 bg-gray-900 md:bg-transparent px-4 gap-y-16 py-6">
					<AnimatePresence>
						<motion.div
							key={SlideImages[sIndex]}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.6 }}
							className="absolute inset-0 z-0 hidden md:flex "
						>
							<div className="w-full h-full bg-gradient-to-r from-transparent to-black/50">
								<Image
									src={SlideImages[sIndex]}
									alt="#"
									fill
									className="relative object-cover grayscale"
								/>
							</div>
						</motion.div>
					</AnimatePresence>
					<div className="flex flex-col gap-12 md:col-span-7 md:order-2 md:w-[90%] my-auto bg-black/20 backdrop-blur-sm  shadow-white/30 shadow-inner p-8 ">
						<h3 className="text-5xl md:text-7xl">
							An Innovative Framework for Your Financial solution
						</h3>
						<p className="text-xl opacity-75">
							Weakness of will , which is the same as thier duty through saying
							through shrinking from toil
						</p>
						<Button02 texts={"Make An Appointment"} />
					</div>
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
						<div className="hidden lg:flex gap-2.5">
							<Button03 className="group hover:bg-primary-500 transition-colors duration-500">
								<BackIcon className="text-black w-10 group-hover:text-white" />
							</Button03>
							<Button03 className="group hover:bg-primary-500 transition-colors duration-500">
								<FowrardIcon className="text-black w-10 group-hover:text-white" />
							</Button03>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col text-center main-p main-py">
				<div className="w-full flex flex-col justify-center items-center gap-4">
					<h1 className="text-5xl font-semibold">Bank for a Better Tomorrow</h1>
					<p className="text-xl text-black/70 px-8">
						Committed to helping our customers succeed.
					</p>
				</div>
				<div className="flex flex-col lg:flex-row gap-y-10 my-10">
					{BANK_CATEGORIES.map((categorie, idx) => {
						return (
							<div
								className="flex flex-col justify-center items-center gap-y-16"
								key={idx}
							>
								<div className="flex flex-col gap-4 justify-center items-center">
									<span>{idx + 1}</span>
									<span className="text-primary-500 text-xl">
										{categorie.type}
									</span>
									<h4 className="text-2xl">{categorie.heading}</h4>
									<p className="text-black/50 px-10">{categorie.preview}</p>
								</div>
								<div>
									<button className="text-xl flex justify-evenly items-end gap-2">
										<Link href={categorie.link}>Read More</Link>
										<Plus
											className="w-4.5"
											strokeWidth={3}
										/>
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default Hero;
