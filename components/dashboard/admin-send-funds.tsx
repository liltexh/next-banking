"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/dashboard/ui/input";
import { Label } from "@/components/dashboard/ui/label";
import { Textarea } from "@/components/dashboard/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/dashboard/ui/card";
import { Switch } from "@/components/dashboard/ui/switch";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/dashboard/ui/select";
import { useUserStore } from "@/store/useUserStore";
import { useUpdateUserDocument } from "@/hooks/useUpdateUserDocument/useUpdateUserDocument";
import { arrayUnion } from "firebase/firestore";
import LoadingAnimation01 from "../LoadingAnimation01";
import { nanoid } from "nanoid";

interface allUsers {
	[key: string]: any;
}

export function AdminSendFunds() {
	const [selectedUser, setSelectedUser] = useState("");
	const [senderName, setSenderName] = useState("");
	const [amount, setAmount] = useState("");
	const [note, setNote] = useState("");
	const [isScheduled, setIsScheduled] = useState(false);
	const [scheduleDate, setScheduleDate] = useState("");
	const [scheduleTime, setScheduleTime] = useState("");
	const [allUsers, setAllUsers] = useState<allUsers>([]);
	const { update: updateAUserDocument, loading: updateLoading } =
		useUpdateUserDocument();
	const { account: adminAccount, loading } = useUserStore();

	useEffect(() => {
		if (!loading && adminAccount?.isAdmin) {
			setAllUsers(adminAccount?.allAccounts);
		}
	}, [adminAccount, loading]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const userInfo = allUsers.find((user: any) => user.email === selectedUser);
		if (!userInfo) {
			console.error("User not found in allUsers");
			return;
		}

		const deliveryTimestamp = isScheduled
			? new Date(`${scheduleDate}T${scheduleTime}`).toISOString()
			: new Date().toISOString();

		const userScheduledAmountUpdate = {
			from: senderName,
			recipient: senderName,
			amount: parseFloat(amount),
			note,
			createdAt: new Date().toISOString(),
			expiresAt: deliveryTimestamp,
			deliveryDate: scheduleDate,
			deliveryTime: scheduleTime,
			status: isScheduled ? "pending" : "delivered",
			id: nanoid(),
		};

		await updateAUserDocument("accounts", selectedUser, {
			pendingTransfers: arrayUnion(userScheduledAmountUpdate),
		});

		setSelectedUser("");
		setSenderName("");
		setAmount("");
		setNote("");
		setIsScheduled(false);
		setScheduleDate("");
		setScheduleTime("");
	};

	return (
		<div className="max-w-md">
			<div className="mb-6">
				<h2 className="text-2xl font-semibold text-slate-800 mb-2">
					Send Funds
				</h2>
				<p className="text-slate-600">Send funds to user accounts</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Admin Transfer</CardTitle>
					<CardDescription>Send funds to any user account</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={handleSubmit}
						className="space-y-4"
					>
						<div>
							<Label htmlFor="user">Select User</Label>
							<Select
								value={selectedUser}
								onValueChange={setSelectedUser}
							>
								<SelectTrigger>
									<SelectValue placeholder="Choose a user..." />
								</SelectTrigger>
								<SelectContent>
									{allUsers.map((user: any) => (
										<SelectItem
											key={user.userId}
											value={user.email}
										>
											{user.name} ({user.email})
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div>
							<Label htmlFor="sender">Sender Name</Label>
							<Input
								id="sender"
								type="text"
								placeholder="Admin Name or Source"
								value={senderName}
								onChange={(e) => setSenderName(e.target.value)}
								required
							/>
						</div>

						<div>
							<Label htmlFor="amount">Amount</Label>
							<div className="relative">
								<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-600">
									$
								</span>
								<Input
									id="amount"
									type="number"
									placeholder="0.00"
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
									className="pl-8"
									step="0.01"
									min="0"
									required
								/>
							</div>
						</div>

						<div>
							<Label htmlFor="note">Note (Optional)</Label>
							<Textarea
								id="note"
								placeholder="Add a note for this transfer..."
								value={note}
								onChange={(e) => setNote(e.target.value)}
								rows={3}
							/>
						</div>

						<div className="flex items-center space-x-2">
							<Switch
								id="schedule"
								checked={isScheduled}
								onCheckedChange={setIsScheduled}
							/>
							<Label htmlFor="schedule">Schedule delivery</Label>
						</div>

						{isScheduled && (
							<div className="grid grid-cols-2 gap-4">
								<div>
									<Label htmlFor="date">Date</Label>
									<Input
										id="date"
										type="date"
										value={scheduleDate}
										onChange={(e) => setScheduleDate(e.target.value)}
										required={isScheduled}
									/>
								</div>
								<div>
									<Label htmlFor="time">Time</Label>
									<Input
										id="time"
										type="time"
										value={scheduleTime}
										onChange={(e) => setScheduleTime(e.target.value)}
										required={isScheduled}
									/>
								</div>
							</div>
						)}

						<Button
							type="submit"
							className="flex gap-2 w-full bg-red-600 hover:bg-red-700"
							disabled={
								!selectedUser || !amount || !senderName || updateLoading
							}
						>
							{updateLoading && <LoadingAnimation01 />}
							{isScheduled ? "Schedule Transfer" : "Send Funds"}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
