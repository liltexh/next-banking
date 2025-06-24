import { Badge } from "@/components/dashboard/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/dashboard/ui/table";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/dashboard/ui/card";

const transactions = [
	{
		id: "1",
		date: "2024-01-15",
		description: "Coffee Shop Purchase",
		type: "Withdrawal",
		amount: -4.67,
		status: "Completed",
	},
	{
		id: "2",
		date: "2024-01-14",
		description: "Salary Deposit",
		type: "Deposit",
		amount: 3200.0,
		status: "Completed",
	},
	{
		id: "3",
		date: "2024-01-13",
		description: "Transfer to John Doe",
		type: "Transfer",
		amount: -500.0,
		status: "Pending",
	},
	{
		id: "4",
		date: "2024-01-12",
		description: "Online Purchase - Amazon",
		type: "Withdrawal",
		amount: -89.99,
		status: "Completed",
	},
	{
		id: "5",
		date: "2024-01-11",
		description: "Rent Payment",
		type: "Transfer",
		amount: -1200.0,
		status: "Scheduled",
	},
	{
		id: "6",
		date: "2024-01-10",
		description: "ATM Withdrawal",
		type: "Withdrawal",
		amount: -100.0,
		status: "Completed",
	},
];

export function TransactionHistory() {
	const getStatusBadge = (status: string) => {
		switch (status) {
			case "Completed":
				return (
					<Badge className="bg-green-100 text-green-800 hover:bg-green-100">
						Completed
					</Badge>
				);
			case "Pending":
				return (
					<Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
						Pending
					</Badge>
				);
			case "Scheduled":
				return (
					<Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
						Scheduled
					</Badge>
				);
			default:
				return <Badge variant="outline">{status}</Badge>;
		}
	};

	const formatAmount = (amount: number) => {
		const formatted = Math.abs(amount).toFixed(2);
		return amount >= 0 ? `+$${formatted}` : `-$${formatted}`;
	};

	return (
		<div>
			<div className="mb-6">
				<h2 className="text-2xl font-semibold text-slate-800 mb-2">
					Transaction History
				</h2>
				<p className="text-slate-600">View all your account transactions</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Recent Transactions</CardTitle>
					<CardDescription>Your complete transaction history</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Date</TableHead>
								<TableHead>Description</TableHead>
								<TableHead>Type</TableHead>
								<TableHead className="text-right">Amount</TableHead>
								<TableHead>Status</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{transactions.map((transaction) => (
								<TableRow key={transaction.id}>
									<TableCell className="font-medium">
										{new Date(transaction.date).toLocaleDateString()}
									</TableCell>
									<TableCell>{transaction.description}</TableCell>
									<TableCell>{transaction.type}</TableCell>
									<TableCell
										className={`text-right font-semibold ${
											transaction.amount >= 0
												? "text-green-600"
												: "text-slate-800"
										}`}
									>
										{formatAmount(transaction.amount)}
									</TableCell>
									<TableCell>{getStatusBadge(transaction.status)}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
