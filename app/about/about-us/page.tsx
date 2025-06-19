import ManagementTeam from "@/components/ManagementTeam";
import QandA from "@/components/QandA";
import SubHero from "@/components/SubHero";
import Testimonials from "@/components/Testimonials";
import { Group, Home, HomeIcon, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

type ad = {
	image: string;
	heading: string;
	prev: string;
};

type awards = {
	icon: string;
	name: string;
	year: string;
	by: string;
};

const BRIEF: ad[] = [
	{
		image: "/history-img-02.jpg",
		heading: "lorern jnwifi",
		prev: "dveve evevev",
	},
	{
		image: "/history-img-02.jpg",
		heading: "lorern jnwifi",
		prev: "dveve evevev",
	},
];

const BRIEF02: ad[] = [
	{
		image: "/history-img-02.jpg",
		heading: "lorern jnwifi",
		prev: "dveve evevev",
	},
	{
		image: "/history-img-02.jpg",
		heading: "lorern jnwifi",
		prev: "dveve evevev",
	},
	{
		image: "/history-img-02.jpg",
		heading: "lorern jnwifi",
		prev: "dveve evevev",
	},
];
// const STATEMENT: ad[] = [
// 	{
// 		image: "/history-img-02.jpg",
// 		heading: "lorern jnwifi",
// 		prev: "dveve evevev",
// 	},
// 	{
// 		image: "/history-img-02.jpg",
// 		heading: "lorern jnwifi",
// 		prev: "dveve evevev",
// 	},
// 	{
// 		image: "/history-img-02.jpg",
// 		heading: "lorern jnwifi",
// 		prev: "dveve evevev",
// 	},
// ];
const ACHIVEMENTS: ad[] = [
	{
		image: "/history-img-02.jpg",
		heading: "lorern jnwifi",
		prev: "dveve evevev",
	},
	{
		image: "/history-img-02.jpg",
		heading: "lorern jnwifi",
		prev: "dveve evevev",
	},
	{
		image: "/history-img-02.jpg",
		heading: "lorern jnwifi",
		prev: "dveve evevev",
	},
	{
		image: "/history-img-02.jpg",
		heading: "lorern jnwifi",
		prev: "dveve evevev",
	},
];

const AWARDS: awards[] = [
	{ icon: "#", name: "usd", year: "lorem", by: "jbsjc jhbcb " },
	{ icon: "#", name: "sek", year: "lorem", by: "jbsjc jhbcb " },
	{ icon: "#", name: "gbp", year: "lorem", by: "jbsjc jhbcb " },
	{ icon: "#", name: "jpy", year: "lorem", by: "jbsjc jhbcb " },
	{ icon: "#", name: "aud", year: "lorem", by: "jbsjc jhbcb " },
];

const Page = () => {
	return (
		<>
			<SubHero
				texts="About Us"
				image="/history-img-02.jpg"
			/>
			<section className="flex flex-col lg:flex-row main-p main-py gap-12">
				<div className="flex-1 w-full">
					<img
						src="/wealth-secure-1.jpg"
						alt=""
						className="w-full"
					/>
				</div>
				<div className="flex-1 px-4 text-black/60">
					<div className="flex flex-col gap-8 mb-8">
						<h3 className="text-5xl font-semibold text-black">
							Known for Trust, Honesty & Customer Support
						</h3>
						<p>
							Belongs to those who fail in their duty through weakness of will,
							which is the same as saying through shrinking from toil and pain.
							These cases are perfectly simple and easy to distinguish.
						</p>
						<p>
							Choice is untrammelled and when nothing prevents our being able to
							do what we like best every pleasure is to be welcomed.
						</p>
					</div>
					<div className="w-full justify-between flex flex-col lg:flex-row gap-12">
						{BRIEF.map((b, idx) => {
							return (
								<div
									className="w-full aspect-auto "
									key={idx}
								>
									<span className="relative">
										<img
											src={b.image}
											alt=""
											className="w-full h-full object-cover"
										/>
										<p className="absolute bottom-4 -right-6 bg-white text-primary-500 text-lg shadow-md p-4 px-8">
											{b.heading}
										</p>
									</span>
									<p className="text-2xl  mt-4">{b.prev}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<section className="flex flex-col lg:grid grid-cols-3 w-full justify-between items-center gap-16 lg:gap-0 main-p main-py">
				{BRIEF02.map((b, idx: number) => {
					return (
						<div
							className="flex flex-col justify-center items-center lg:border-r border-black/30 last:border-r-0 gap-6"
							key={idx}
						>
							<span
								className={`relative w-20 flex justify-center items-center aspect-square rounded-tr-2xl rounded-bl-2xl shadow-lg   font-semibold before:absolute before:content-['02'] before:bg-beige-100 before:w-10 before:aspect-square before:-top-8 before:-left-10 before:rounded-tr-2xl before:rounded-bl-2xl before:text-black/50 text-xl before:flex before:items-center before:justify-center`}
							>
								<Group size={48} />
							</span>
							<h5 className="text-lg">{b.heading}</h5>
							<p className="text-black/30 text-lg">{b.prev}</p>
						</div>
					);
				})}
			</section>
			<section className="bg-beige-100 w-full main-p main-py ">
				<div className="flex flex-col lg:flex-row justify-center items-end-safe gap-4">
					<div className="flex flex-col justify-center gap-4 lg:grid grid-cols-2 grid-rows-2 flex-1 w-full h-full px-4 items-stretch">
						<img
							src="/images/statements-1.jpg"
							alt=""
							className="row-span-2"
						/>
						<img
							src="/images/statements-2.jpg"
							alt=" w-full h-full"
						/>
						<img
							src="/images/statements-3.jpg"
							alt=" w-full h-full"
						/>
					</div>
					<div className="flex-1 flex flex-col gap-8 p-14 text-white bg-gradient-to-r from-primary-600 to-primary-500 w-full h-full">
						<h5 className="text-5xl font-semibold">
							A Great Mission Statement
						</h5>
						<p>
							Obligations of business it will frequently occur that pleasures
							have to be repudiated and annoyances accepted. The wise man always
							holds these matters to this principle of selection rejects
							pleasures to secure other greater pleasures.
						</p>
						<button className="text-xl flex  gap-2 items-end">
							<Link href="#">Read More</Link>
							<Plus
								className="w-4.5"
								strokeWidth={3}
							/>
						</button>
					</div>
				</div>
			</section>
			<section className="w-full main-p main-py text-white bg-black text-center">
				<div className="flex flex-col justify-center items-center w-full gap-4 mb-14">
					<h3 className="text-5xl font-semibold">Few Interesting Numbers</h3>
					<p className="text-white/50 text-lg">
						Numbers that speak about banking service.
					</p>
				</div>
				<div className="flex flex-col lg:flex-row gap-8">
					{ACHIVEMENTS.map((achivement, idx) => {
						return (
							<div
								className="flex flex-col justify-center items-center gap-8 w-full"
								key={idx}
							>
								<span className="w-32 aspect-square rounded-full flex justify-center items-center border border-white/70">
									<Home />
								</span>

								<div className="flex flex-col gap-4">
									<h4 className="text-2xl">{achivement.heading}</h4>
									<p className="px-10">{achivement.prev}</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<section className="w-full main-p main-py  flex flex-col lg:flex-row justify-center items-center gap-8">
				<div className="flex-1 flex flex-col gap-8 w-full h-full">
					<h5 className="text-5xl font-semibold">
						Better Value Banking Experience
					</h5>
					<p>
						Business it will frequently occur that pleasures have to be
						repudiated and annoyances accepted. The wise man therefore always
						holds these matters to this principle of selection.
					</p>
					<div className="flex gap-4">
						<span>Download</span>
						<span>Report for 2024</span>
					</div>
				</div>
				<div className="flex-1 flex justify-center items-center w-full">
					<img
						src="/images/statistics-chart.png"
						alt=""
						className="w-full object-cover"
					/>
				</div>
			</section>
			<section className="bg-beige-100 main-p main-py">
				<div></div>
				<div className="flex flex-col gap-8 lg:grid grid-cols-3 grid-rows-2 text-center text-black">
					{AWARDS.map((award, idx) => {
						return idx == 1 ? (
							<div
								className="row-span-2 relative"
								key={idx}
							>
								<img
									src="/images/trophy.png"
									alt=""
								/>
							</div>
						) : (
							<div
								className="flex flex-col  w-full bg-white p-6 gap-4 justify-between items-center shadow-lg"
								key={idx}
							>
								<div className="flex gap-4 justify-start items-center w-full border-b">
									<span className="w-14 aspect-square flex justify-center items-center">
										<HomeIcon />
									</span>
									<p className="text-xl">{award.name}</p>
								</div>
								<div className="w-full bg-white/10 text-lg text-black/30">
									<div className="flex gap-4 items-center w-full border-b border-white/30 min-h-10">
										<p className="min-w-20 flex justify-between">
											Year <span>:</span>
										</p>
										<p>{award.year}</p>
									</div>
									<div className="flex gap-4 items-center w-full border-b border-white/30 min-h-10">
										<p className="min-w-20 flex justify-between">
											Award by <span>:</span>
										</p>
										<p>{award.by}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<Testimonials />
			<ManagementTeam />
			<QandA />
		</>
	);
};

export default Page;
