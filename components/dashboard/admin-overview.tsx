import { SummaryCard } from "@/components/dashboard/summary-card";
import { Users, DollarSign, Clock, Calendar } from "lucide-react";

export function AdminOverview() {
	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-2xl font-semibold text-slate-800 mb-2">
					Admin Overview
				</h2>
				<p className="text-slate-600">System overview and key metrics</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<SummaryCard
					title="Total Users"
					value="1,247"
					icon={<Users className="w-6 h-6 text-blue-600" />}
					trend="+12 this month"
					trendUp={true}
				/>

				<SummaryCard
					title="Total Holdings"
					value="$2.4M"
					icon={<DollarSign className="w-6 h-6 text-green-600" />}
					trend="+5.2% from last month"
					trendUp={true}
				/>

				<SummaryCard
					title="Active Transfers"
					value="23"
					icon={<Clock className="w-6 h-6 text-yellow-600" />}
					trend="Processing now"
					trendUp={null}
				/>

				<SummaryCard
					title="Scheduled Transfers"
					value="156"
					icon={<Calendar className="w-6 h-6 text-purple-600" />}
					trend="Next 30 days"
					trendUp={null}
				/>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="bg-white rounded-lg shadow-md p-6">
					<h3 className="text-lg font-semibold text-slate-800 mb-4">
						Recent User Activity
					</h3>
					<div className="space-y-4">
						{[
							{
								user: "John Doe",
								action: "Deposited $500.00",
								time: "2 minutes ago",
							},
							{
								user: "Jane Smith",
								action: "Withdrew $200.00",
								time: "15 minutes ago",
							},
							{
								user: "Mike Johnson",
								action: "Sent $150.00",
								time: "1 hour ago",
							},
							{
								user: "Sarah Wilson",
								action: "Deposited $1,200.00",
								time: "2 hours ago",
							},
						].map((activity, index) => (
							<div
								key={index}
								className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
							>
								<div>
									<p className="font-medium text-slate-800">{activity.user}</p>
									<p className="text-sm text-slate-600">{activity.action}</p>
								</div>
								<p className="text-sm text-slate-500">{activity.time}</p>
							</div>
						))}
					</div>
				</div>

				<div className="bg-white rounded-lg shadow-md p-6">
					<h3 className="text-lg font-semibold text-slate-800 mb-4">
						System Alerts
					</h3>
					<div className="space-y-4">
						{[
							{
								type: "warning",
								message: "High volume of transfers detected",
								time: "5 minutes ago",
							},
							{
								type: "info",
								message: "Daily backup completed successfully",
								time: "1 hour ago",
							},
							{
								type: "success",
								message: "System maintenance completed",
								time: "3 hours ago",
							},
						].map((alert, index) => (
							<div
								key={index}
								className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-b-0"
							>
								<div
									className={`w-2 h-2 rounded-full mt-2 ${
										alert.type === "warning"
											? "bg-yellow-500"
											: alert.type === "info"
											? "bg-blue-500"
											: "bg-green-500"
									}`}
								></div>
								<div className="flex-1">
									<p className="text-sm text-slate-800">{alert.message}</p>
									<p className="text-xs text-slate-500">{alert.time}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
