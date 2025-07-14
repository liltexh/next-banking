import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase"; // adjust to your Firebase setup

interface Account {
	currentBalance: number;
	pendingTransfers: any[];
	transactionHistory: any[];
	isAdmin?: boolean;
}

export async function getAllAccountsSummary() {
	// Get all accounts
	const allDocsSnapshot = await getDocs(collection(db, "accounts"));
	const allAccounts: Account[] = [];

	allDocsSnapshot.forEach((doc) => {
		const data = doc.data() as Account;
		allAccounts.push(data);
	});
	// a. Store documents in an array ✅
	const totalAccounts = allAccounts.length;

	// b. Count total accounts ✅
	// Already done above

	// c. Sum of all current balances ✅
	const totalHoldings = allAccounts.reduce(
		(acc, account) => acc + (account.currentBalance || 0),
		0
	);

	// d. Gather all pending transfers and count them ✅
	const allPendingTransfers = allAccounts.flatMap(
		(account) => account.pendingTransfers || []
	);
	// console.log("this is all pending transfer", allPendingTransfers);
	const totalPendingTransfers = allPendingTransfers.length;

	// e. Gather all transaction histories ✅
	const allTransactionHistories = allAccounts.flatMap(
		(account) => account.transactionHistory || []
	);
	// console.log("this is all transaction history", allTransactionHistories);
	// 2. Get all accounts where isAdmin == false ✅
	const nonAdminQuery = query(
		collection(db, "accounts"),
		where("isAdmin", "==", false)
	);
	const nonAdminSnapshot = await getDocs(nonAdminQuery);

	const nonAdminAccounts: Account[] = [];
	nonAdminSnapshot.forEach((doc) => {
		const data = doc.data() as Account;
		nonAdminAccounts.push(data);
	});

	// Return result
	return {
		allAccounts,
		totalAccounts,
		totalHoldings,
		totalPendingTransfers,
		allPendingTransfers,
		allTransactionHistories,
		nonAdminAccounts,
	};
}
