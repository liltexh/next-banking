"use client";

import type React from "react";

import { useState } from "react";
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

const users = [
	{ id: "1", name: "John Doe", email: "john.doe@email.com" },
	{ id: "2", name: "Jane Smith", email: "jane.smith@email.com" },
	{ id: "3", name: "Mike Johnson", email: "mike.johnson@email.com" },
	{ id: "4", name: "Sarah Wilson", email: "sarah.wilson@email.com" },
	{ id: "5", name: "David Brown", email: "david.brown@email.com" },
];

export function AdminSendFunds() {
	const [selectedUser, setSelectedUser] = useState("");
	const [amount, setAmount] = useState("");
	const [note, setNote] = useState("");
	const [isScheduled, setIsScheduled] = useState(false);
	const [scheduleDate, setScheduleDate] = useState("");
	const [scheduleTime, setScheduleTime] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle admin send funds logic here
		console.log("Admin sending funds:", {
			selectedUser,
			amount,
			note,
			isScheduled,
			scheduleDate,
			scheduleTime,
		});
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
									{users.map((user) => (
										<SelectItem
											key={user.id}
											value={user.id}
										>
											{user.name} ({user.email})
										</SelectItem>
									))}
								</SelectContent>
							</Select>
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
							className="w-full bg-red-600 hover:bg-red-700"
							disabled={!selectedUser || !amount}
						>
							{isScheduled ? "Schedule Transfer" : "Send Funds Now"}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
