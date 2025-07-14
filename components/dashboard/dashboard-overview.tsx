import { SummaryCard } from "@/components/dashboard/summary-card";
import { useUserStore } from "@/store/useUserStore";
import {
	ArrowDownToLine,
	ArrowUpFromLine,
	Clock,
	CheckCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

type accountType = {
	accountNumber?: number;
	accountType?: string;
	currentBalance?: number;
	lastTransaction?: number;
	pendingTransfers?: number[];
	totalPending?: number;
	amountOfPending?: number;
	[key: string]: any;
	// Add other user properties as needed
};

export function DashboardOverview() {
	const [accountDetails, setAccountDetails] = useState<accountType>();
	const { account: userAccount, loading } = useUserStore();

	const handlePendingTransfers = (transfers: number[]) => {
		const totalSum = transfers.reduce((acc, curr) => acc + curr, 0);
		const totalCount = transfers.length;
		return [totalSum || 0, totalCount || 0];
	};

	useEffect(() => {
		const getAccountDetails = () => {
			if (loading) {
				return; // or return a loading spinner
			}
			if (!userAccount) {
				console.log("No userAccount found, check database");
				// Redirect logic can be added here if needed
			} else {
				if (!userAccount?.isAdmin) {
					const pendingTransfers = userAccount?.pendingTransfers || [];
					const [totalPending, amountOfPending] =
						handlePendingTransfers(pendingTransfers);
					setAccountDetails({ ...userAccount, totalPending, amountOfPending });
				}
			}
		};

		getAccountDetails();
		// Cleanup function is not needed here, so return undefined
	}, [userAccount, loading]);

	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-2xl font-semibold text-slate-800 mb-2">
					Dashboard Overview
				</h2>
				<p className="text-slate-600">
					Welcome back! Here's your account summary.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<SummaryCard
					title="Current Balance"
					value={`$ ${String(accountDetails?.currentBalance)}`}
					icon={<CheckCircle className="w-6 h-6 text-green-600" />}
					trend="+2.5% from last month"
					trendUp={true}
				/>

				<SummaryCard
					title="Last Transaction"
					value={`$ ${String(accountDetails?.lastTransaction)}`}
					icon={<ArrowUpFromLine className="w-6 h-6 text-red-600" />}
					trend="Coffee Shop - Today"
					trendUp={false}
				/>

				<SummaryCard
					title="Pending Transfers"
					value={`$ ${String(accountDetails?.totalPending)}`}
					icon={<Clock className="w-6 h-6 text-yellow-600" />}
					trend={`${String(accountDetails?.amountOfPending)} transfers pending`}
					trendUp={null}
					highlighted={true}
				/>

				{/* <SummaryCard
						title="Scheduled Transactions"
						value="$1,200.00"
						icon={<ArrowDownToLine className="w-6 h-6 text-blue-600" />}
						trend="Next: Rent payment"
						trendUp={null}
					/> */}
			</div>

			<div className="bg-white rounded-lg shadow-md p-6">
				<h3 className="text-lg font-semibold text-slate-800 mb-4">
					Recent Activity
				</h3>
				<div className="space-y-4">
					{[
						{
							date: "Today",
							description: "Coffee Shop Purchase",
							amount: "-$4.67",
							status: "completed",
						},
						{
							date: "Yesterday",
							description: "Salary Deposit",
							amount: "+$3,200.00",
							status: "completed",
						},
						{
							date: "Dec 20",
							description: "Transfer to Savings",
							amount: "-$500.00",
							status: "pending",
						},
						{
							date: "Dec 19",
							description: "Online Purchase",
							amount: "-$89.99",
							status: "completed",
						},
					].map((transaction, index) => (
						<div
							key={index}
							className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
						>
							<div>
								<p className="font-medium text-slate-800">
									{transaction.description}
								</p>
								<p className="text-sm text-slate-600">{transaction.date}</p>
							</div>
							<div className="text-right">
								<p
									className={`font-semibold ${
										transaction.amount.startsWith("+")
											? "text-green-600"
											: "text-slate-800"
									}`}
								>
									{transaction.amount}
								</p>
								<span
									className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
										transaction.status === "completed"
											? "bg-green-100 text-green-800"
											: "bg-yellow-100 text-yellow-800"
									}`}
								>
									{transaction.status}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
