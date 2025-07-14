"use client";

import { useUserStore } from "@/store/useUserStore";

interface TransferErrorProps {
	amount: string;
}

export function TransferError({ amount }: TransferErrorProps) {
	const { account } = useUserStore();

	if (!account || account.isAdmin) return null;

	const numericAmount = parseFloat(amount);
	const balance = account.currentBalance || 0;

	if (!amount || isNaN(numericAmount)) return null;

	const hasEnough = numericAmount <= balance;

	return (
		<div
			className={`mt-4 rounded-lg px-4 py-3 text-sm font-medium ${
				hasEnough
					? "bg-red-100 text-red-800 border border-red-300"
					: "bg-yellow-100 text-yellow-800 border border-yellow-300"
			}`}
		>
			{hasEnough
				? "A server error occurred. We're working to fix the issue. Please try again soon."
				: "You do not have enough funds for this transfer."}
		</div>
	);
}
