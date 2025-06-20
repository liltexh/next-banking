import SubHero from "@/components/SubHero";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type accountOption = {
	header: string;
	name: string;
	context: string;
	minimumAmount: string;
	maintainanceFee: string;
	beneficts: string;
	intrest: number;
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

const page = () => {
	return (
		<section>
			<SubHero texts="Account Options" />
			<div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 main-p main-py">
				{ACCOUNT_OPTIONS.map((option, idx: number) => {
					return (
						<div
							key={idx}
							className="flex flex-col shadow-md border  border-beige-100"
						>
							<div className="flex flex-col gap-2 justify-center items-center text-center p-10">
								<h5 className="text-4xl text-primary-500 md:mb-2">
									{option.header}
								</h5>
								<h6 className="text-2xl">{option.name}</h6>
								<p className="text-lg text-black/60">{option.context}</p>
								<span className="relative mt-4 min-w-44 h-auto group border">
									<Link href="#">
										<button className="flex justify-center items-center w-full py-3 bg-primary-500 text-lg text-white group-hover:-translate-x-10 transition-discrete duration-300">
											Open Account
										</button>
									</Link>
									<ArrowRight className="absolute top-1/2  -translate-y-1/2 text-primary-500 right-2 -translate-x-30 group-hover:translate-x-0 transition-discrete duration-300 -z-10" />
								</span>
							</div>
							<div className="flex flex-col px-4">
								<p className="account-p">
									Minimum Account Opening {option.minimumAmount}
								</p>
								<p className="account-p">
									${option.maintainanceFee} or $0 Monthly Maintainance Fee
								</p>
								<p className="account-p">{option.beneficts}</p>
								<p className="account-p">{option.intrest}</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default page;
