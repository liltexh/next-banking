"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/dashboard/ui/input";
import { Label } from "@/components/dashboard/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/dashboard/ui/card";

export function WithdrawFunds() {
	const [amount, setAmount] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle withdrawal logic here
		console.log("Withdrawing:", amount);
	};

	return (
		<div className="max-w-md">
			<div className="mb-6">
				<h2 className="text-2xl font-semibold text-slate-800 mb-2">
					Withdraw Funds
				</h2>
				<p className="text-slate-600">Withdraw money from your account</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Make a Withdrawal</CardTitle>
					<CardDescription>
						Enter the amount you'd like to withdraw from your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={handleSubmit}
						className="space-y-4"
					>
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
							<p className="text-sm text-slate-500 mt-1">
								Available balance: $12,847.32
							</p>
						</div>

						<Button
							type="submit"
							className="w-full bg-red-600 hover:bg-red-700"
							disabled={!amount}
						>
							Withdraw Funds
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
