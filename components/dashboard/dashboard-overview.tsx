import { SummaryCard } from "@/components/dashboard/summary-card";
import {
	ArrowDownToLine,
	ArrowUpFromLine,
	Clock,
	CheckCircle,
} from "lucide-react";

export function DashboardOverview() {
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
					value="$12,847.32"
					icon={<CheckCircle className="w-6 h-6 text-green-600" />}
					trend="+2.5% from last month"
					trendUp={true}
				/>

				<SummaryCard
					title="Last Transaction"
					value="$-45.67"
					icon={<ArrowUpFromLine className="w-6 h-6 text-red-600" />}
					trend="Coffee Shop - Today"
					trendUp={false}
				/>

				<SummaryCard
					title="Pending Transfers"
					value="$500.00"
					icon={<Clock className="w-6 h-6 text-yellow-600" />}
					trend="2 transfers pending"
					trendUp={null}
					highlighted={true}
				/>

				<SummaryCard
					title="Scheduled Transactions"
					value="$1,200.00"
					icon={<ArrowDownToLine className="w-6 h-6 text-blue-600" />}
					trend="Next: Rent payment"
					trendUp={null}
				/>
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
