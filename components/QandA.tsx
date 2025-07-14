"use client";
import React, { useState } from "react";
import Button02 from "./Button02";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";

type faq = {
	heading: string;
	context: string;
};

const FAQ: faq[] = [
	{
		heading: "What is the interest rate on savings accounts?",
		context:
			"Our savings accounts offer competitive interest rates that vary based on account type and balance. Please check our rates page or contact support for the most up-to-date figures.",
	},
	{
		heading: "How can I open a new account online?",
		context:
			"You can open an account through our website or mobile app in just a few steps. You'll need a valid ID, proof of address, and a working email or phone number to get started.",
	},
	{
		heading: "Is my money safe with your bank?",
		context:
			"Yes, your funds are secure. We are fully licensed and insured, and we use advanced encryption and security protocols to protect all transactions and data.",
	},
	{
		heading: "How do I transfer money to another account?",
		context:
			"You can easily transfer funds via our mobile app or online banking platform. Go to 'Transfers', enter the recipient's details, amount, and confirm the transaction securely.",
	},
	{
		heading: "Are there any hidden fees I should know about?",
		context:
			"We maintain transparent pricing. All fees, including ATM usage, maintenance, and international transactions, are clearly listed on our fees page. No hidden charges—ever.",
	},
];

const QandA = () => {
	const [questionIdx, setQuestionIdx] = useState(-1);
	const addQuestionActive = (idx: number) => {
		setQuestionIdx(idx);
	};
	return (
		<section className="main-p main-py w-fit m-auto flex flex-col gap-8 lg:gap-14">
			<div className="flex flex-col lg:flex-row justify-between items-center text-center w-full gap-y-3.5 gap-x-20">
				<div className="flex flex-col gap-4">
					<h3 className="text-5xl">Questions & Answers</h3>
					<p className="text-xl text-black/60">
						Find answers to all your queries about our service.
					</p>
				</div>
				{/* <div className="flex flex-col gap-4 justify-center items-center lg:items-start">
					<p className="text-lg font-semibold">Help You to Find</p>
					<span className="flex p-4 gap-7 shadow-lg w-full outline-1 outline-black/5">
						<input
							type="text"
							placeholder="Related Keyword..."
							className="w-full text-lg min-w-64 outline-none"
						/>
						<button>
							<Search />
						</button>
					</span>
				</div> */}
			</div>
			<div className="flex flex-col lg:flex-row gap-10">
				<div className="flex-1">
					<img
						src="/images/faq-style1__image.jpg"
						alt=""
						className="w-full object-cover aspect-auto grayscale"
					/>
				</div>
				<div className="flex-1">
					<div>
						{FAQ.map((faq, idx: number) => {
							return (
								<div
									className="flex flex-col gap-8 min-w-1 max-w-lg"
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
										<span className="flex justify-center items-center gap-4">
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
				<Link href="/get-in-touch">
					<Button02
						texts="Contact Us"
						className="shadow-md px-8"
					/>
				</Link>
			</div>
		</section>
	);
};

export default QandA;
