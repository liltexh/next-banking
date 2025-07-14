import { Button } from "@/components/dashboard/ui/button";
import { Input } from "@/components/dashboard/ui/input";
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
import { Search, Eye, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/useUserStore";
interface AccountsType {
	[key: string]: any;
}
const users = [
	{
		id: "1",
		name: "John Doe",
		email: "john.doe@email.com",
		accountType: "Checking",
		balance: 12847.32,
		status: "Active",
	},
	{
		id: "2",
		name: "Jane Smith",
		email: "jane.smith@email.com",
		accountType: "Savings",
		balance: 25600.0,
		status: "Active",
	},
	{
		id: "3",
		name: "Mike Johnson",
		email: "mike.johnson@email.com",
		accountType: "Checking",
		balance: 3420.15,
		status: "Active",
	},
	{
		id: "4",
		name: "Sarah Wilson",
		email: "sarah.wilson@email.com",
		accountType: "Premium",
		balance: 45200.8,
		status: "Active",
	},
	{
		id: "5",
		name: "David Brown",
		email: "david.brown@email.com",
		accountType: "Checking",
		balance: 890.45,
		status: "Suspended",
	},
];

export function UserAccounts() {
	const [allAccounts, setAllAccounts] = useState<AccountsType>([]);
	const { account: adminAccount, loading } = useUserStore();
	useEffect(() => {
		const getAccountDetails = () => {
			if (loading) {
				console.log("this code is loading");
				return; // or return a loading spinner
			}
			console.log("i am tired very very tired");
			if (!adminAccount) {
				console.log("No userAccount found, check database");
				// Redirect logic can be added here if needed
			} else {
				if (adminAccount?.isAdmin) {
					setAllAccounts(adminAccount?.allAccounts);
				}
				console.log("this is all admin account", adminAccount);
				console.log("and u have gottten all the user accounts", allAccounts);
			}
		};

		getAccountDetails();
		// Cleanup function is not needed here, so return undefined
	}, [adminAccount, loading]);
	const getAccountTypeBadge = (type: string) => {
		switch (type) {
			case "Premium":
				return (
					<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
						Premium
					</Badge>
				);
			case "Savings":
				return (
					<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
						Savings
					</Badge>
				);
			case "Checking":
				return (
					<Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
						Checking
					</Badge>
				);
			default:
				return <Badge variant="outline">{type}</Badge>;
		}
	};

	const getStatusBadge = (status: string) => {
		return status === "Active" ? (
			<Badge className="bg-green-100 text-green-800 hover:bg-green-100">
				Active
			</Badge>
		) : (
			<Badge className="bg-red-100 text-red-800 hover:bg-red-100">
				Suspended
			</Badge>
		);
	};

	return (
		<div>
			<div className="mb-6">
				<h2 className="text-2xl font-semibold text-slate-800 mb-2">
					User Accounts
				</h2>
				<p className="text-slate-600">Manage all user accounts and balances</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>All User Accounts</CardTitle>
					<CardDescription>View and manage user accounts</CardDescription>
					<div className="flex items-center gap-2 pt-4">
						<div className="relative flex-1 max-w-sm">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
							<Input
								placeholder="Search users..."
								className="pl-10"
							/>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow className="max-sm:hidden">
								<TableHead>Name</TableHead>
								<TableHead>Email</TableHead>
								<TableHead>Account Type</TableHead>
								<TableHead className="text-right ">Balance</TableHead>
								{/* <TableHead>Status</TableHead> */}
								{/* <TableHead>Actions</TableHead> */}
							</TableRow>
						</TableHeader>
						<TableBody>
							{allAccounts.map((user: any) => (
								<TableRow
									key={user.accountNumber}
									className="max-sm:grid max-sm:grid-cols-2"
								>
									<TableCell className="font-medium">{user.name}</TableCell>
									<TableCell>{user.email}</TableCell>
									<TableCell>{getAccountTypeBadge(user.accountType)}</TableCell>
									<TableCell className="text-right font-semibold">
										$
										{user.currentBalance.toLocaleString("en-US", {
											minimumFractionDigits: 2,
										})}
									</TableCell>
									{/* <TableCell>{getStatusBadge(user.status)}</TableCell> */}
									{/* <TableCell>
										<div className="flex gap-2">
											<Button
												variant="outline"
												size="sm"
											>
												<Eye className="w-4 h-4 mr-1" />
												View
											</Button>
											<Button
												variant="outline"
												size="sm"
												className="bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
											>
												<Send className="w-4 h-4 mr-1" />
												Send Funds
											</Button>
										</div>
									</TableCell> */}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
