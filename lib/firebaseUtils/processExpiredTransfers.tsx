import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function processExpiredTransfers(userId: string) {
	const accountRef = doc(db, "accounts", userId);
	const snapshot = await getDoc(accountRef);

	if (!snapshot.exists()) {
		console.warn("No account found for user:", userId);
		return;
	}

	const accountData = snapshot.data();
	const now = new Date().toISOString();

	const updatedPendingTransfers = accountData.pendingTransfers.map(
		(transfer: any) => {
			if (
				transfer.status === "pending" &&
				new Date(transfer.expiresAt) <= new Date(now)
			) {
				// Mark as delivered and credit the user
				accountData.currentBalance += transfer.amount;

				// Add to history
				accountData.transactionHistory.push({
					id: `txn_${Date.now()}`,
					description: `Received from ${transfer.from || "unknown sender"}`,
					amount: transfer.amount,
					type: "Deposit",
					date: now,
					status: "Completed",
				});

				return {
					...transfer,
					status: "delivered",
				};
			}
			return transfer;
		}
	);

	await updateDoc(accountRef, {
		currentBalance: accountData.currentBalance,
		pendingTransfers: updatedPendingTransfers,
		transactionHistory: accountData.transactionHistory,
	});
}
