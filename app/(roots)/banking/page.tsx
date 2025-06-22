import React from "react";
import { ArrowRight, PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import SubHero from "@/components/SubHero";

type accountOption = {
	header: string;
	name: string;
	context: string;
	minimumAmount: string;
	maintainanceFee: string;
	beneficts: string;
	intrest: number;
};

type steps = {
	icon: string;
	heading: string;
	context: string;
	bgColor: string;
};

const ACCOUNT_OPTIONS: accountOption[] = [
	{
		header: "Save Money Securely",
		name: "Savings Account",
		context: "A secure account to save money and earn interest.",
		minimumAmount: "100",
		maintainanceFee: "0",
		beneficts: "Earn interest on your savings, no monthly fees.",
		intrest: 1.5,
	},
	{
		header: "Flexible Daily Transactions",
		name: "Checking Account",
		context: "A flexible account for everyday transactions.",
		minimumAmount: "0",
		maintainanceFee: "10",
		beneficts: "Unlimited transactions, debit card access.",
		intrest: 0,
	},
	{
		header: "Fixed Rate Savings Plan",
		name: "Fixed Deposit Account",
		context: "A savings account with a fixed interest rate for a set term.",
		minimumAmount: "500",
		maintainanceFee: "0",
		beneficts: "Higher interest rates than regular savings accounts.",
		intrest: 2.5,
	},
	{
		header: "Shared Expenses Management",
		name: "Joint Account",
		context:
			"Comprihensive Banking tooo the most of your banking relationship.",
		minimumAmount: "50",
		maintainanceFee: "5",
		beneficts: "Manage shared expenses easily.",
		intrest: 0.5,
	},
	{
		header: "Business Financial Management",
		name: "Corporate Account",
		context: "Designed for businesses to manage finances.",
		minimumAmount: "1000",
		maintainanceFee: "20",
		beneficts: "Business transactions, payroll services.",
		intrest: 0.1,
	},
	{
		header: "Investments Buying and Selling",
		name: "Brokerage Account",
		context: "Buying and selling , investments All Simplified.",
		minimumAmount: "1000",
		maintainanceFee: "15",
		beneficts: "Access to stock markets and investment opportunities.",
		intrest: 0,
	},
];

const STEPS_TO_ACCOUNT: steps[] = [
	{
		icon: "",
		heading: "hvah uagdbu aidhia aibhdia",
		context:
			"ii iahdi idbhiah iahdihai diahid jbu jbj jbvj xrsr jhih gyv hftdrdy jbhuih jbugtctfvy kion jbhutcg buhilm",

		bgColor: "skyBlue",
	},
	{
		icon: "",
		heading: "hvah uagdbu aidhia aibhdia",
		context:
			"ii iahdi idbhiah iahdihai diahid jbu jbj jbvj xrsr jhih gyv hftdrdy jbhuih jbugtctfvy kion jbhutcg buhilm",

		bgColor: "skyBlue",
	},
	{
		icon: "",
		heading: "hvah uagdbu aidhia aibhdia",
		context:
			"ii iahdi idbhiah iahdihai diahid jbu jbj jbvj xrsr jhih gyv hftdrdy jbhuih jbugtctfvy kion jbhutcg buhilm",

		bgColor: "skyBlue",
	},
	{
		icon: "",
		heading: "hvah uagdbu aidhia aibhdia",
		context:
			"ii iahdi idbhiah iahdihai diahid jbu jbj jbvj xrsr jhih gyv hftdrdy jbhuih jbugtctfvy kion jbhutcg buhilm",

		bgColor: "skyBlue",
	},
];

const page = () => {
	return (
		<>
			<SubHero texts="Banking" />
			<section className="flex flex-col gap-16 main-p main-py">
				<div className="flex flex-col justify-center items-center">
					<h1 className="main-h4-01">Account Options</h1>
					<p className="main-p-01">Convenient banking options for you.</p>
				</div>
				<div className="flex flex-col gap-14 md:grid md:grid-cols-2 lg:grid-cols-3 px-2">
					{ACCOUNT_OPTIONS.map((option, idx: number) => {
						return (
							<div
								key={idx}
								className="relative flex flex-col shadow-md z-0 p-10"
							>
								<img
									src="/images/statements-1.jpg"
									alt=""
									className="absolute inset-0 object-cover w-full h-full grayscale -z-50"
								/>

								<span className=" flex flex-col justify-center items-start bg-white w-full text-xl absolute bottom-4 -right-10 p-4 shadow z-50">
									<h6 className="text-2xl text-primary-500">{option.name}</h6>
									<p className="text-[16px] text-black/40">{option.context}</p>
								</span>

								<div className="flex flex-col gap-2 justify-center items-center text-center bg-black/30 border border-white/40 backdrop-blur-sm mb-20 py-4 text-white">
									<div className="flex flex-col px-4">
										<p className="account-p">
											Minimum Account Opening {option.minimumAmount}
										</p>
										<p className="account-p">
											${option.maintainanceFee} or $0 Monthly Maintainance Fee
										</p>
										<p className="account-p">{option.beneficts}</p>
										<p className="account-p">{option.intrest} intrest</p>
									</div>
									<span className="relative mt-4 min-w-44 h-auto group bg-white">
										<Link href="#">
											<button className="flex justify-center items-center w-full py-3 bg-primary-500 text-lg text-white group-hover:-translate-x-10 transition-discrete duration-300">
												Open Account
											</button>
										</Link>
										<ArrowRight
											className="absolute top-1/2  -translate-y-1/2 right-2 -translate-x-30  -z-10 
                              group-hover:z-0 group-hover:translate-x-0  transition-discrete duration-300 text-primary-500"
										/>
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<section className="flex flex-col lg:flex-row gap-y-12 bg-black text-white">
				<div className="flex-1">
					<img
						src="/images/skyscrapper.png"
						alt=""
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="flex-1 px-4 flex flex-col justify-center lg:pl-12">
					<div className="flex flex-col gap-6 mb-8">
						<h3 className="text-5xl font-semibold">
							Step to Make Your Dreams Possible
						</h3>
						<p className="text-white/60 mb-8">
							The claims off duty or the obligations business it will frequently
							pleasures repudiated to distinguish nothing.
						</p>
						<ul className="flex flex-col gap-2 text-lg text-white/60">
							<li>Explorer of the master-builder</li>
							<li>On the other hand</li>
							<li>Perfectly simple & easy</li>
							<li>Explorer of the master-builder</li>
							<li>On the other hand</li>
							<li>Perfectly simple & easy</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-16 main-p main-py">
				<div className="flex flex-col justify-center items-center text-center gap-4">
					<h1 className="main-h4-01">Your Account In Easy Steps</h1>
					<p className="main-p-01">We show our value by serving faithfully</p>
				</div>
				<div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2">
					{STEPS_TO_ACCOUNT.map((steps, idx: number) => {
						return (
							<div className="relative w-fit m-auto after:absolute after:content-[''] after:w-full after:h-full after:top-2.5 after:left-2.5 after:-right-2.5 after:-bottom-2.5 after:border after:border-teal-300 after:-z-10">
								<div
									key={idx}
									className={`relative flex flex-col w-2xs z-0 p-10 bg-teal-300 text-white overflow-hidden  before:absolute before:content-['hello'] before:top-0 before:right-0 before:rotate-45 before:translate-x-24 before:translate-y-4 before:bg-white before:w-full before:py-2 before:text-center before:font-semibold before:z-50 before:text-black `}
								>
									<div className="flex flex-col gap-4 justify-center items-start border-b-2 border-white">
										<span>
											<PersonStandingIcon />
										</span>
										<p className="text-2xl mb-4">{steps.heading}</p>
									</div>
									<div className="mt-4">{steps.context}</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default page;
