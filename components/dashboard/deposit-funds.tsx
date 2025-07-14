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
import { TransferError } from "./TransferError";

export function DepositFunds() {
	const [amount, setAmount] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle deposit logic here
		console.log("Depositing:", amount);
	};

	return (
		<>
			<div className="max-w-md">
				<div className="mb-6">
					<h2 className="text-2xl font-semibold text-slate-800 mb-2">
						Deposit Funds
					</h2>
					<p className="text-slate-600">Add money to your account</p>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>Make a Deposit</CardTitle>
						<CardDescription>
							Enter the amount you'd like to deposit into your account
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
										required
									/>
								</div>
							</div>

							<Button
								type="submit"
								className="w-full bg-red-600 hover:bg-red-700"
								disabled={!amount}
							>
								Deposit Funds
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
			{/* 🔥 Show error message conditionally */}
			<TransferError amount={amount} />
		</>
	);
}
