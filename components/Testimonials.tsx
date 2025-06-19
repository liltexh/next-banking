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
		star: 4,
		date: "febuary 23 2024",
		context:
			"Experience with Finbank has been very accommodating forthey have online banking. When I need to transfer funds and pay bills it can be done at ...",
		profile: "/images/statements-2.jpg",
		profileName: "Nathan Felix",
		country: "carlifonia",
	},
	{
		star: 4,
		date: "febuary 23 2024",
		context:
			"Experience with Finbank has been very accommodating forthey have online banking. When I need to transfer funds and pay bills it can be done at ...",
		profile: "/images/statements-2.jpg",
		profileName: "Nathan Felix",
		country: "carlifonia",
	},
	{
		star: 4,
		date: "febuary 23 2024",
		context:
			"Experience with Finbank has been very accommodating forthey have online banking. When I need to transfer funds and pay bills it can be done at ...",
		profile: "/images/statements-2.jpg",
		profileName: "Nathan Felix",
		country: "carlifonia",
	},
	{
		star: 4,
		date: "febuary 23 2024",
		context:
			"Experience with Finbank has been very accommodating forthey have online banking. When I need to transfer funds and pay bills it can be done at ...",
		profile: "/images/statements-2.jpg",
		profileName: "Nathan Felix",
		country: "carlifonia",
	},
	{
		star: 4,
		date: "febuary 23 2024",
		context:
			"Experience with Finbank has been very accommodating forthey have online banking. When I need to transfer funds and pay bills it can be done at ...",
		profile: "/images/statements-2.jpg",
		profileName: "Nathan Felix",
		country: "carlifonia",
	},
	{
		star: 4,
		date: "febuary 23 2024",
		context:
			"Experience with Finbank has been very accommodating forthey have online banking. When I need to transfer funds and pay bills it can be done at ...",
		profile: "/images/statements-2.jpg",
		profileName: "Nathan Felix",
		country: "carlifonia",
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
