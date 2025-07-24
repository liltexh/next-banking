import ManagementTeam from "@/components/ManagementTeam";
import QandA from "@/components/QandA";
import SubHero from "@/components/SubHero";
import Testimonials from "@/components/Testimonials";
import {
	Award,
	Banknote,
	Group,
	Handshake,
	Home,
	HomeIcon,
	Plus,
	ShieldCheck,
	Star,
	TrendingUp,
	Trophy,
	Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
type ad = {
	image: any;
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
		image: "/images/intro-about-1.jpg",
		heading: "Established Legacy in Financial Services",
		prev: "Over four decades of consistent, customer-focused banking excellence.",
	},
	{
		image: "/images/intro-about-2.jpg",
		heading: "Driven by Expertise and Commitment",
		prev: "Fueled by passion and guided by professional, trusted management.",
	},
];

const BRIEF02: ad[] = [
	{
		image: Trophy, // Represents success and recognition
		heading: "Award-Winning Excellence",
		prev: "Recognized globally for innovation and customer satisfaction.",
	},
	{
		image: Handshake, // Represents trust and partnership
		heading: "Trusted Financial Partner",
		prev: "Committed to building lasting relationships through transparency and trust.",
	},
	{
		image: ShieldCheck, // Represents security and reliability
		heading: "Secure & Dependable",
		prev: "Protecting your wealth with cutting-edge security and peace of mind.",
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
const ACHIEVEMENTS: { icon: any; heading: string; prev: string }[] = [
	{
		icon: ShieldCheck,
		heading: "Trusted by Thousands",
		prev: "Our bank has consistently earned the trust of individuals and businesses for over 40 years.",
	},
	{
		icon: TrendingUp,
		heading: "Consistent Growth",
		prev: "We’ve maintained year-over-year growth across all key banking metrics and customer satisfaction.",
	},
	{
		icon: Users,
		heading: "Global Customer Base",
		prev: "Serving over 5 million customers worldwide with tailored financial solutions.",
	},
	{
		icon: Banknote,
		heading: "Billions in Assets Managed",
		prev: "Successfully managing portfolios and deposits worth billions in local and international currencies.",
	},
];

const AWARDS = [
	{
		icon: Trophy,
		name: "Best Digital Bank",
		year: "2024",
		by: "Global Finance Awards",
	},
	{
		icon: Award,
		name: "Most Innovative Fintech",
		year: "2023",
		by: "World Financial Summit",
	},
	{
		icon: Star,
		name: "Top Customer Experience",
		year: "2023",
		by: "Fintech Customer Choice Awards",
	},
	{
		icon: ShieldCheck,
		name: "Excellence in Security",
		year: "2022",
		by: "CyberSafe International",
	},
	{
		icon: Banknote,
		name: "Emerging Bank of the Year",
		year: "2021",
		by: "Forbes Africa Banking Awards",
	},
];

const Page = () => {
	return (
		<>
			<SubHero
				texts="About Us"
				image="/images/aboutUs.jpg"
			/>
			<section className="flex flex-col lg:grid lg:grid-cols-2 main-p main-py gap-12">
				<div className="border flex justify-center items-center">
					<img
						src="/images/skyscrapper.png"
						alt=""
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="px-4 text-black/60">
					<div className="flex flex-col gap-6 mb-8">
						<h3 className="text-5xl font-semibold text-black">
							Known for Trust, Honesty & Customer Support
						</h3>
						<p>
							Our Company is known for its , support, and commitment to
							customer, fast responce and security has been a pinnacle for
							growth.
						</p>
						<p>
							the choices we make to build a better future for our customers and
							communities. We believe in the power of banking to transform
							lives, and we are dedicated to providing innovative solutions that
							empower individuals and businesses to achieve their financial
							goals.
						</p>
					</div>
					<div className="w-full flex justify-start flex-col lg:flex-row gap-12">
						{BRIEF.map((b, idx) => {
							return (
								<div
									className="w-full aspect-auto md:max-h-48"
									key={idx}
								>
									<span className="relative">
										<Image
											src={b.image}
											alt=""
											width={100}
											height={100}
											className="w-full h-full object-cover "
										/>
										<p className="absolute bottom-4 -right-6 bg-white text-primary-500 shadow-md p-4 px-8">
											{b.heading}
										</p>
									</span>
									<p className="mt-4">{b.prev}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<section className="flex flex-col lg:grid grid-cols-3 w-full justify-between items-center gap-16 lg:gap-0 main-p main-py">
				{BRIEF02.map((b, idx: number) => {
					const Icon = b.image;
					return (
						<div
							className="flex flex-col justify-center items-center lg:border-r border-black/30 last:border-r-0 gap-6"
							key={idx}
						>
							<span
								className={`relative w-20 flex justify-center items-center aspect-square rounded-tr-2xl rounded-bl-2xl shadow-lg   font-semibold before:absolute before:content-['02'] before:bg-beige-100 before:w-10 before:aspect-square before:-top-8 before:-left-10 before:rounded-tr-2xl before:rounded-bl-2xl before:text-black/50 text-xl before:flex before:items-center before:justify-center`}
							>
								<Icon
									size={48}
									className="text-gray-600"
								/>
							</span>
							<h5 className="text-lg">{b.heading}</h5>
							<p className="text-black/30 text-center">{b.prev}</p>
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
							alt=""
						/>
						<img
							src="/images/statements-3.jpg"
							alt=""
						/>
					</div>
					<div className="flex-1 flex flex-col gap-6 p-14 text-white bg-gradient-to-r from-primary-600 to-primary-500 w-full h-full">
						<h5 className="text-5xl font-semibold">
							A Mission Built on Trust, Growth & Service
						</h5>
						<p>
							In the ever-evolving world of finance, we believe that true
							progress comes from making bold, ethical choices. While short-term
							gains may be tempting, we prioritize long-term value, customer
							trust, and responsible growth. Our mission is to empower
							individuals and businesses by offering reliable banking solutions
							that align with their goals and aspirations.
						</p>

						{/* <button className="text-xl flex  gap-2 items-end">
							<Link href="#">Read More</Link>
							<Plus
								className="w-4.5"
								strokeWidth={3}
							/>
						</button> */}
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
					{ACHIEVEMENTS.map((achivement, idx) => {
						const Icon = achivement.icon;
						return (
							<div
								className="flex flex-col justify-center items-center gap-8 w-full"
								key={idx}
							>
								<span className="w-32 aspect-square rounded-full flex justify-center items-center border border-white/70">
									<Icon className="w-10 h-10" />
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
						We believe banking should be simple, rewarding, and built around
						your needs. That’s why we offer competitive rates, personalized
						service, and seamless digital tools—ensuring you get more value from
						every transaction, every time. Experience financial services
						designed to help you grow with confidence.
					</p>

					<div className="flex gap-4">
						{/* <span>Download</span> */}
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
						const Icon = award.icon;
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
										<Icon className="w-6 h-6" />
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
