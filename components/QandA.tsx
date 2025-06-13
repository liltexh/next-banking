"use client";
import React, { useState } from "react";
import Button02 from "./Button02";
import { ArrowDown, ArrowRight, Search } from "lucide-react";

type faq = {
	heading: string;
	context: string;
};
const FAQ: faq[] = [
	{
		heading: "What is the rate of interest?",
		context:
			"There anyone who loves or pursues desire rationally encounter consequences that are extremely painful again ...",
	},
	{
		heading: "What is the rate of interest?",
		context:
			"There anyone who loves or pursues desire rationally encounter consequences that are extremely painful again ...",
	},
	{
		heading: "What is the rate of interest?",
		context:
			"There anyone who loves or pursues desire rationally encounter consequences that are extremely painful again ...",
	},
	{
		heading: "What is the rate of interest?",
		context:
			"There anyone who loves or pursues desire rationally encounter consequences that are extremely painful again ...",
	},
	{
		heading: "What is the rate of interest?",
		context:
			"There anyone who loves or pursues desire rationally encounter consequences that are extremely painful again ...",
	},
];

const QandA = () => {
	const [questionIdx, setQuestionIdx] = useState(-1);
	const addQuestionActive = (idx: number) => {
		setQuestionIdx(idx);
	};
	return (
		<section className="main-p main-py w-fit m-auto flex flex-col gap-8 lg:gap-14">
			<div className="flex flex-col lg:flex-row justify-between items-center text-center w-full px-4 gap-y-3.5 gap-x-20">
				<div className="flex flex-col gap-4">
					<h3 className="text-5xl">Questions & Answers</h3>
					<p className="text-xl text-black/60">
						Find answers to all your queries about our service.
					</p>
				</div>
				<div className="flex flex-col gap-4 justify-center items-center lg:items-start">
					<p className="text-lg font-semibold">Help You to Find</p>
					<span className="flex  p-4 shadow-lg w-full outline-1 outline-black/5">
						<input
							type="text"
							placeholder="Related Keyword..."
							className="w-full text-lg min-w-72 outline-none"
						/>
						<button>
							<Search />
						</button>
					</span>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row gap-10">
				<div className="flex-1">
					<img
						src="/faq-style1__image.jpg"
						alt=""
						className="w-full object-cover aspect-auto"
					/>
				</div>
				<div className="flex-1">
					<div>
						{FAQ.map((faq, idx: number) => {
							return (
								<div
									className="flex flex-col gap-8 max-w-xl"
									key={idx}
								>
									<span
										className={`cursor-pointer text-xl font-semibold border border-black/30 p-4 px-8 ${
											questionIdx == idx &&
											"border-primary-500 text-primary-500"
										}`}
										onClick={() => {
											addQuestionActive(idx);
										}}
									>
										<span className="flex gap-4">
											<span
												className={`transition-all duration-500 ${
													questionIdx == idx && "rotate-90"
												}`}
											>
												<ArrowRight />
											</span>

											<p>{faq.heading}</p>
										</span>
									</span>
									<p
										className={`pt-0 h-0 overflow-hidden transition-all duration-300 ${
											questionIdx == idx && "p-8 h-auto"
										}`}
									>
										{faq.context}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col justify-center items-center gap-4 text-lg">
				<p>
					Didn’t get, Click below button to more answers or{" "}
					<span>contact us.</span>{" "}
				</p>
				<Button02
					texts="Open Account"
					className="shadow-md px-8"
				/>
			</div>
		</section>
	);
};

export default QandA;
