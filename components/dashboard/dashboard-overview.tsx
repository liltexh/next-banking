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

	const handlePendingTransfers = (transfers: any[]) => {
		const values = transfers.map((t) =>
			typeof t === "number" ? t : t.amount || 0
		);
		const totalSum = values.reduce((acc, curr) => acc + curr, 0);
		const totalCount = values.length;
		return [totalSum, totalCount];
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
					value={`$ ${accountDetails?.totalPending}`}
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
					Transaction History
				</h3>
				{accountDetails?.transactionHistory?.length ? (
					<div className="space-y-4">
						{accountDetails.transactionHistory
							.slice(0, 6) // show only latest 6 transactions
							.map((txn: any, index: number) => (
								<div
									key={index}
									className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
								>
									<div>
										<p className="font-medium text-slate-800 capitalize">
											{txn.action} – ${txn.amount?.toLocaleString() ?? 0}
										</p>
										<p className="text-sm text-slate-600">{txn.time}</p>
									</div>
									<div className="text-right">
										<p
											className={`font-semibold ${
												txn.action === "deposited"
													? "text-green-600"
													: txn.action === "withdrew"
													? "text-red-600"
													: "text-blue-600"
											}`}
										>
											{txn.action === "deposited" ? "+" : "-"}$
											{txn.amount?.toLocaleString()}
										</p>
										{/* Optional: Add status if you include it in the future */}
										{/* <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
								completed
							</span> */}
									</div>
								</div>
							))}
					</div>
				) : (
					<p className="text-gray-500 text-sm">No transactions yet.</p>
				)}
			</div>
		</div>
	);
}
