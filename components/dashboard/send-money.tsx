"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/dashboard/ui/button";
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

export function SendMoney() {
	const [recipient, setRecipient] = useState("");
	const [amount, setAmount] = useState("");
	const [note, setNote] = useState("");
	const [isScheduled, setIsScheduled] = useState(false);
	const [scheduleDate, setScheduleDate] = useState("");
	const [scheduleTime, setScheduleTime] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle send money logic here
		console.log("Sending money:", {
			recipient,
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
					Send Money
				</h2>
				<p className="text-slate-600">Transfer money to another account</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Send Transfer</CardTitle>
					<CardDescription>
						Send money to another account holder
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={handleSubmit}
						className="space-y-4"
					>
						<div>
							<Label htmlFor="recipient">Recipient Email or Account ID</Label>
							<Input
								id="recipient"
								type="text"
								placeholder="john@example.com or 123456789"
								value={recipient}
								onChange={(e) => setRecipient(e.target.value)}
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
									max="12847.32"
									required
								/>
							</div>
						</div>

						<div>
							<Label htmlFor="note">Note (Optional)</Label>
							<Textarea
								id="note"
								placeholder="Add a note for the recipient..."
								value={note}
								onChange={(e) => setNote(e.target.value)}
								rows={3}
							/>
						</div>

						{/* <div className="flex items-center space-x-2">
							<Switch
								id="schedule"
								checked={isScheduled}
								onCheckedChange={setIsScheduled}
							/>
							<Label htmlFor="schedule">Schedule this transfer</Label>
						</div> */}

						{/* {isScheduled && (
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
						)} */}

						<div className="flex gap-2">
							<Button
								type="submit"
								className="flex-1 bg-red-600 hover:bg-red-700"
								disabled={!recipient || !amount}
							>
								Send Now
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
