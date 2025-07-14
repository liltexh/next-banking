import { Star } from "lucide-react";
import { number } from "motion/react";
import React from "react";
type tst = {
	star: number;
	date: string;
	context: string;
	profile: string;
	profileName: string;
	country: string;
};
const TESTIMONIALS: tst[] = [
	{
		star: 5,
		date: "February 23, 2024",
		context:
			"GlobeTrust’s mobile and online banking are so easy to use. I can transfer money and manage my accounts with just a few taps, even while traveling.",
		profile: "/images/testimonial-1.jpg",
		profileName: "Nathan Felix",
		country: "California, USA",
	},
	{
		star: 4,
		date: "March 15, 2024",
		context:
			"I’ve been with GlobeTrust for over a decade. Their customer support is prompt and genuinely helpful — it feels like a bank that truly listens.",
		profile: "/images/testimonial-2.jpg",
		profileName: "Maria Gonzalez",
		country: "Madrid, Spain",
	},
	{
		star: 5,
		date: "April 3, 2024",
		context:
			"Opening my account with GlobeTrust was fast and seamless. I also love how transparent they are with rates and charges.",
		profile: "/images/testimonial-3.jpg",
		profileName: "Adewale Johnson",
		country: "Lagos, Nigeria",
	},
	{
		star: 4,
		date: "May 10, 2024",
		context:
			"The exchange rate services from GlobeTrust helped me save significantly while sending money abroad. Very competitive and easy to use!",
		profile: "/images/testimonial-4.jpg",
		profileName: "Sophie Lee",
		country: "Seoul, South Korea",
	},
	{
		star: 5,
		date: "June 1, 2024",
		context:
			"Reliable, secure, and straightforward — GlobeTrust makes digital banking feel truly personal and efficient. I wouldn’t bank anywhere else.",
		profile: "/images/testimonial-5.jpg",
		profileName: "Lucas Meyer",
		country: "Berlin, Germany",
	},
	{
		star: 4,
		date: "July 5, 2024",
		context:
			"Their scheduled transfers feature helps me automate payments easily. Plus, their app design is very intuitive and clean.",
		profile: "/images/testimonial-6.jpg",
		profileName: "Aisha Rahman",
		country: "Dubai, UAE",
	},
];

function Testimonials() {
	return (
		<section className="main-p main-py">
			<div className="w-full flex flex-col lg:grid lg:grid-cols-2 gap-8">
				{TESTIMONIALS.map((tst, idx: number) => {
					return (
						<div
							className={`flex bg-beige-100 flex-col justify-center items-center gap-6  p-10 ${
								[1, 2, 5].includes(idx)
									? "lg:bg-beige-100 lg:shadow-none"
									: "lg:bg-white lg:shadow-lg"
							} ${idx % 2 == 0 && "bg-white shadow-lg"}`}
							key={idx}
						>
							<div className="w-full flex justify-between items-center">
								<span className="flex text-[RGB(255,215,0)]">
									<Star
										fill="#ffd700"
										className="w-5"
									/>
									<Star
										fill="#ffd700"
										className="w-5"
									/>
									<Star
										fill="#ffd700"
										className="w-5"
									/>
									<Star
										fill="#ffd700"
										className="w-5"
									/>
								</span>
								<p className="text-lg">{tst.date}</p>
							</div>
							<div className="text-lg">
								<p>{tst.context}</p>
							</div>
							<div className="flex w-full gap-2 justify-start items-center">
								<span className="w-14 aspect-square rounded-full overflow-hidden">
									<img
										src={tst.profile}
										alt=""
										className="w-full h-full object-cover"
									/>
								</span>
								<span>
									<p className="text-xl">{tst.profileName}</p>
									<p className="text-primary-500">{tst.country}</p>
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Testimonials;
