import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { create } from "zustand";
import { getFirestoreDocument } from "../lib/firebaseUtils/getFirestoreDocument";
import { getAllAccountsSummary } from "@/lib/firebaseUtils/getAccountsSummary";

interface FirestoreUserData {
	userId?: string;
	Fname?: string;
	email?: string;
	isAdmin?: boolean;
	[key: string]: any; // for other unknown fields
}
interface FirestoreUserAccount {
	accountNumber: number;
	accountType: string;
	currentBalance: number;
	lastTransaction: number;
	pendingTransfers: number[];
	[key: string]: any;
}

interface BaseUserData {
	userId: string;
	name: string;
	email: string;
	isAdmin: boolean;
}

interface OtherInfo {
	[key: string]: any; // or `unknown` if you want stricter safety
}

type UserStoreData = BaseUserData & {
	otherInfo: OtherInfo;
};

interface AccountData extends FirestoreUserAccount {
	isAdmin: boolean;
}

interface AdminData {
	isAdmin: boolean;
	[key: string]: any;
}

interface UserStore {
	user: UserStoreData | null;
	account: AccountData | AdminData | null;
	//add the account type also
	loading: boolean;
	listenToAuth: () => void;
}

interface AccountType {
	allAccounts: any;
	totalAccounts: number;
	totalHoldings: number;
	totalPendingTransfers: number;
	allPendingTransfers: any;
	allTransactionHistories: any;
	nonAdminAccounts: any;
}

// create the store

export const useUserStore = create<UserStore>((set) => ({
	user: null,
	account: null,
	loading: true,

	listenToAuth: () => {
		console.log("litening to auth changes ....");
		onAuthStateChanged(auth, async (firebaseUser) => {
			if (firebaseUser) {
				const userDoc = await getFirestoreDocument<FirestoreUserData>(
					firebaseUser.uid,
					"users"
				);
				const userAccountDoc = await getFirestoreDocument<FirestoreUserAccount>(
					firebaseUser.uid,
					"accounts"
				);
				const adminAccountDoc = await getAllAccountsSummary();
				const userData: UserStoreData = {
					userId: userDoc?.userId || firebaseUser.uid,
					name: userDoc?.Fname || firebaseUser.displayName || "", // fallback if null
					email: userDoc?.email || firebaseUser.email || "", // fallback if null
					isAdmin: userDoc?.isAdmin || false, // assuming isAdmin is a boolean field in Firestore
					otherInfo: userDoc ?? {},
				};

				const userAccountData: AccountData = {
					accountNumber: userAccountDoc?.accountNumber || 0, // default value if not found
					accountType: userAccountDoc?.accountType || "default",
					currentBalance: userAccountDoc?.currentBalance || 0,
					lastTransaction: userAccountDoc?.lastTransaction || 0,
					pendingTransfers: userAccountDoc?.pendingTransfers || [],
					transactionHistory: userAccountDoc?.transactionHistory || [],
					isAdmin: false,
				};

				const AdminAccountData = {
					allAccounts: adminAccountDoc?.allAccounts || [],
					totalAccounts: adminAccountDoc?.totalAccounts || 0,
					totalHoldings: adminAccountDoc?.totalHoldings || 0,
					totalPendingTransfers: adminAccountDoc?.totalPendingTransfers || 0,
					allPendingTransfers: adminAccountDoc?.allPendingTransfers || [],
					allTransactionHistories:
						adminAccountDoc?.allTransactionHistories || [],
					nonAdminAccounts: adminAccountDoc?.nonAdminAccounts || [],

					isAdmin: true,
				};
				console.log("this is the zustend store user data", userData);
				console.log(
					"this is zustand registering the all pending transfers",
					AdminAccountData?.allPendingTransfers
				);
				set({
					user: userData,
					account: !userData.isAdmin ? userAccountData : AdminAccountData,
					loading: false,
				});
			} else {
				console.log("no user was found so  user is returning null");
				set({ user: null, account: null, loading: false });
			}
		});
	},
}));
