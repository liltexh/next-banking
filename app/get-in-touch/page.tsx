import SubHero from "@/components/SubHero";
import { ArrowDown, Facebook, Map, Youtube } from "lucide-react";
import Form from "next/form";
import React from "react";

type quickInfo = {
	icon: string;
	name: string;
	content: string;
	extraContent: string;
};

const QUICK_INFO: quickInfo[] = [
	{
		icon: "#",
		name: "Corporate Office",
		content: "141, First Floor, 12 St RootsTerrace,",
		extraContent: "Los Angeles USA 90010",
	},
	{
		icon: "#",
		name: "Corporate Office",
		content: "141, First Floor, 12 St RootsTerrace,",
		extraContent: "Los Angeles USA 90010",
	},
	{
		icon: "#",
		name: "Corporate Office",
		content: "141, First Floor, 12 St RootsTerrace,",
		extraContent: "Los Angeles USA 90010",
	},
];

const page = () => {
	return (
		<>
			<SubHero
				texts="Get in Touch"
				image="/history-img-02.jpg"
			/>
			<section className="main-p main-py ">
				<div className="w-full flex flex-col lg:flex-row gap-x-16 bg-beige-100">
					<div className="flex-1 relative -shadow-md p-8 bg-white z-0  flex flex-col gap-8 ">
						<div className="flex flex-col gap-3 text-center">
							<h3 className="text-4xl font-semibold">
								Get Support for any Queries or Complaints
							</h3>
							<p className="text-black/50 text-lg">
								Committed to helping you meet all your banking needs.
							</p>
						</div>
						<div className="relative flex flex-col items-center justify-center gap-y-14 border border-beige-100 py-14 lg:py-10 bg-white lg:left-24">
							{QUICK_INFO.map((info, idx: number) => {
								return (
									<div
										className="flex flex-col lg:flex-row gap-4 justify-center items-center text-center lg:text-start"
										key={idx}
									>
										<span className="bg-beige-100 w-16 aspect-square rounded-full flex justify-center items-center">
											<Map />
										</span>
										<div className="flex flex-col gap-2">
											<small className="text-beige-100 text-lg">
												{info.name}
											</small>
											<p className="text-xl font-semibold">{info.content}</p>
											<p className="text-xl font-semibold">
												{info.extraContent}
											</p>
										</div>
									</div>
								);
							})}
						</div>
						<div className="w-full flex flex-col lg:flex-row justify-center items-start lg:items-center lg:justify-between gap-4 self-start">
							<span className="text-white flex gap-2">
								<ArrowDown />
								<p>Customer Care</p>
							</span>
							<div className="flex gap-2">
								<span className="w-12 aspect-square rounded-full flex justify-center items-center text-black/40 border border-black/40 bg-white">
									<Youtube />
								</span>
								<span className="w-12 aspect-square rounded-full flex justify-center items-center text-black/40 border border-black/40 bg-white">
									<Youtube />
								</span>
								<span className="w-12 aspect-square rounded-full flex justify-center items-center text-black/40 border border-black/40 bg-white">
									<Youtube />
								</span>
								<span className="w-12 aspect-square rounded-full flex justify-center items-center text-black/40 border border-black/40 bg-white">
									<Youtube />
								</span>
							</div>
						</div>
						<div className="absolute w-[80%] lg:w-[60%] aspect-square bg-primary-500 left-0 bottom-0 -z-10 [clip-path:polygon(0_100%,0_0,100%_100%)]"></div>
					</div>

					<div className="flex-1 max-w-xl mx-auto p-6 bg-beige-100 flex justify-center items-center">
						{/*write server actions on what the form should do*/}
						<form
							action=""
							className="space-y-4"
						>
							<input
								type="text"
								name="name"
								required
								placeholder="Name"
								className="w-full p-4 border border-gray-300 bg-white"
							/>

							<input
								type="email"
								name="email"
								required
								placeholder="Email"
								className="w-full p-4 border border-gray-300 bg-white"
							/>

							<input
								type="tel"
								name="phone"
								placeholder="Phone Number"
								className="w-full p-4 border border-gray-300 bg-white"
							/>

							<input
								type="text"
								name="subject"
								placeholder="Subject"
								className="w-full p-4 border border-gray-300 bg-white"
							/>

							<textarea
								name="message"
								required
								rows={5}
								placeholder="Your message..."
								className="w-full p-4 border border-gray-300 bg-white"
							/>

							<button
								type="submit"
								className="bg-primary-500 text-white px-10 py-4 hover:bg-primary-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
							>
								Send A Message
							</button>
						</form>
					</div>
				</div>
			</section>
			<section className="w-full main-p main-py flex flex-col">
				<div className="w-full text-black flex justify-center items-center font-semibold mb-16">
					<h4 className="text-4xl lg:text-5xl">Customer Care Numbers</h4>
				</div>
				<div className="w-fit text-xl bg-white p-4 px-16 shadow-md text-primary-500 font-semibold">
					Banking
				</div>
				<div className="w-full h-[54vh] lg:h-[60vh] shadow-lg bg-white grid grid-cols-2 text-lg">
					<span className="flex-1 border-r border-b border-black/30 flex-center justify-center pl-6 lg:pl-8 text-center font-semibold">
						Personal Service
					</span>
					<span className="flex-1 border-r flex-center justify-center pl-6 lg:pl-8 border-b border-black/30 font-semibold">
						Contact Details
					</span>
					<span className="flex-1 flex-center border-r border-b border-black/30 pl-6 lg:pl-8">
						<h5>General Query/Complaint</h5>
					</span>
					<span className="flex-1 flex-center flex-col">
						<span className="flex-1 border-b border-black/30 w-full flex-center pl-6 lg:pl-8">
							<p>+844-123-4567-89</p>
						</span>
						<span className="flex-1 flex-center w-full pl-6 lg:pl-8 border-b border-black/30">
							<p>info@example.com</p>
						</span>
					</span>
					<span className="flex-1 flex-center border-r border-b  border-black/30 pl-6 lg:pl-8">
						<h5>Credit Card</h5>
					</span>
					<span className="flex-1 flex-center flex-col">
						<span className="flex-1 border-b border-black/30 w-full flex-center pl-6 lg:pl-8">
							<p>+844-123-4567-89</p>
						</span>
						<span className="flex-1 flex-center w-full pl-6 lg:pl-8 border-b border-black/30">
							<p>info@example.com</p>
						</span>
					</span>
					<div className="flex justify-center items-center text-center col-span-2 w-full h-full font-semibold">
						<p>To submit your complaint,</p> <span>Click here</span>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;
