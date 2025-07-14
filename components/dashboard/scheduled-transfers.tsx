import { Button } from "@/components/ui/button";
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
import { Edit, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import { useUpdateUserDocument } from "@/hooks/useUpdateUserDocument/useUpdateUserDocument";
interface scheduleType {
	[key: string]: any;
}
const scheduledTransfers = [
	{
		id: "1",
		recipient: "John Doe",
		email: "john.doe@email.com",
		amount: 500.0,
		deliveryDate: "2024-01-20",
		deliveryTime: "09:00",
		status: "Scheduled",
	},
	{
		id: "2",
		recipient: "Jane Smith",
		email: "jane.smith@email.com",
		amount: 1200.0,
		deliveryDate: "2024-01-22",
		deliveryTime: "14:30",
		status: "Scheduled",
	},
	{
		id: "3",
		recipient: "Mike Johnson",
		email: "mike.johnson@email.com",
		amount: 750.0,
		deliveryDate: "2024-01-18",
		deliveryTime: "10:15",
		status: "Delivered",
	},
	{
		id: "4",
		recipient: "Sarah Wilson",
		email: "sarah.wilson@email.com",
		amount: 300.0,
		deliveryDate: "2024-01-25",
		deliveryTime: "16:00",
		status: "Scheduled",
	},
];

export function ScheduledTransfers() {
	const [scheduledDetails, setScheduledDetails] = useState<scheduleType>();
	const { update: updateAUserDocument, loading: updateLoading } =
		useUpdateUserDocument();
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
					setScheduledDetails(adminAccount?.allPendingTransfers);
				}
				console.log("this is all admin account", adminAccount);
			}
		};

		getAccountDetails();
		// Cleanup function is not needed here, so return undefined
	}, [adminAccount, loading]);

	const handleCancel = async (email: string, transferId: string) => {
		try {
			// Filter out the cancelled transfer using its unique ID
			const updatedTransfers = scheduledDetails?.filter(
				(item: any) => !(item.email === email && item.id === transferId)
			);

			// Update the Firestore doc of the specific user
			const userTransfers =
				updatedTransfers?.filter((item: any) => item.email === email) || [];

			await updateAUserDocument("accounts", email, {
				pendingTransfers: userTransfers,
			});

			// Update UI
			setScheduledDetails(updatedTransfers);
			console.log("Transfer cancelled successfully.");
		} catch (error) {
			console.error("Error cancelling transfer:", error);
		}
	};

	const getStatusBadge = (status: string) => {
		return status === "Scheduled" || "pending" ? (
			<Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
				Scheduled
			</Badge>
		) : (
			<Badge className="bg-green-100 text-green-800 hover:bg-green-100">
				Delivered
			</Badge>
		);
	};

	const formatDateTime = (date: string, time: string) => {
		const formattedDate = new Date(date).toLocaleDateString();
		return `${formattedDate} at ${time}`;
	};

	return (
		<div>
			<div className="mb-6">
				<h2 className="text-2xl font-semibold text-slate-800 mb-2">
					Scheduled Transfers
				</h2>
				<p className="text-slate-600">
					Manage all upcoming admin-created transfers
				</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Upcoming Transfers</CardTitle>
					<CardDescription>
						All scheduled transfers created by admin
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader className="max-sm:hidden">
							<TableRow>
								<TableHead>Recipient</TableHead>
								<TableHead className="text-right">Amount</TableHead>
								<TableHead>Delivery Date/Time</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{scheduledDetails?.map((transfer: any, idx: number) => (
								<TableRow
									key={transfer.id}
									className="max-sm:flex max-sm:flex-col justify-center items-start"
								>
									<TableCell>
										<div>
											<p className="font-medium text-slate-800">
												{transfer.recipient}
											</p>
											<p className="text-sm text-slate-600">{transfer.email}</p>
										</div>
									</TableCell>
									<TableCell className="text-right font-semibold">
										$
										{transfer.amount.toLocaleString("en-US", {
											minimumFractionDigits: 2,
										})}
									</TableCell>

									<TableCell>
										{formatDateTime(
											transfer.deliveryDate,
											transfer.deliveryTime
										)}
									</TableCell>
									<TableCell>{getStatusBadge(transfer.status)}</TableCell>

									<TableCell>
										<div className="flex gap-2">
											{transfer.status === "pending" && (
												<>
													{/* <Button
														variant="outline"
														size="sm"
													>
														<Edit className="w-4 h-4 mr-1" />
														Edit
													</Button> */}
													<Button
														onClick={() => {
															handleCancel(transfer.email, transfer.id);
														}}
														variant="outline"
														size="sm"
														className="text-red-600 hover:text-red-700"
													>
														<X className="w-4 h-4 mr-1" />
														Cancel
													</Button>
												</>
											)}
											{transfer.status === "Delivered" && (
												<span className="text-sm text-slate-500">
													Completed
												</span>
											)}
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
