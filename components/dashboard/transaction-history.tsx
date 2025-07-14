"use client";
import { useUserStore } from "@/store/useUserStore";
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

export function TransactionHistory() {
	const { account, loading } = useUserStore();

	const transactions = !account?.isAdmin
		? account?.transactionHistory || []
		: [];

	const pendingTransfers = !account?.isAdmin
		? account?.pendingTransfers || []
		: [];

	const formatAmount = (amount: number) => {
		const formatted = Math.abs(amount).toFixed(2);
		return amount >= 0 ? `+$${formatted}` : `-$${formatted}`;
	};

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "Completed":
			case "Delivered":
			case "delivered":
				return (
					<Badge className="bg-green-100 text-green-800 hover:bg-green-100">
						{status}
					</Badge>
				);
			case "Pending":
			case "Scheduled":
			case "pending":
				return (
					<Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
						{status}
					</Badge>
				);
			default:
				return <Badge variant="outline">{status}</Badge>;
		}
	};

	return (
		<div className="space-y-10">
			{/* Transaction History Section */}
			<div>
				<h2 className="text-2xl font-semibold text-slate-800 mb-2">
					Transaction History
				</h2>
				<p className="text-slate-600">View all your account transactions</p>

				<Card className="mt-6">
					<CardHeader>
						<CardTitle>Recent Transactions</CardTitle>
						<CardDescription>
							This includes deposits, withdrawals and transfers.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Date</TableHead>
									<TableHead>Action</TableHead>
									<TableHead className="text-right">Amount</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{transactions?.length > 0 ? (
									transactions.map((txn: any, idx: number) => (
										<TableRow key={idx}>
											<TableCell>
												{txn.time
													? new Date(txn.time).toLocaleDateString()
													: "N/A"}
											</TableCell>
											<TableCell className="capitalize">{txn.action}</TableCell>
											<TableCell
												className={`text-right font-semibold ${
													txn.action === "deposited"
														? "text-green-600"
														: txn.action === "withdrew"
														? "text-red-600"
														: "text-blue-600"
												}`}
											>
												{formatAmount(txn.amount || 0)}
											</TableCell>
										</TableRow>
									))
								) : (
									<TableRow>
										<TableCell colSpan={3}>No transactions yet</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>

			{/* Incoming Transfers Section */}
			<div>
				<h2 className="text-2xl font-semibold text-slate-800 mb-2">
					Pending Incoming Transfers
				</h2>
				<p className="text-slate-600">
					Transfers scheduled to arrive in your account
				</p>

				<Card className="mt-6">
					<CardHeader>
						<CardTitle>Incoming Transfers</CardTitle>
						<CardDescription>
							These are scheduled or pending transfers that you’ll receive soon.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Recipient</TableHead>
									<TableHead>Date</TableHead>
									<TableHead className="text-right">Amount</TableHead>
									<TableHead>Status</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{pendingTransfers?.length > 0 ? (
									pendingTransfers.map((transfer: any, idx: number) => (
										<TableRow key={idx}>
											<TableCell>{transfer.recipient || "N/A"}</TableCell>
											<TableCell>
												{transfer.deliveryDate || "Unknown"}{" "}
												{transfer.deliveryTime || ""}
											</TableCell>
											<TableCell className="text-right text-blue-600 font-semibold">
												${(transfer.amount || 0).toLocaleString()}
											</TableCell>
											<TableCell>{getStatusBadge(transfer.status)}</TableCell>
										</TableRow>
									))
								) : (
									<TableRow>
										<TableCell colSpan={4}>No pending transfers</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
