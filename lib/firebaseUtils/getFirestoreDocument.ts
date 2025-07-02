// lib/firestoreUtils.ts
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { auth } from "@/lib/firebase";

export const getFirestoreDocument = async <T>(
	UID: string | undefined,
	collectionName: string
): Promise<T | null> => {
	const currentUser = auth.currentUser;

	if (!currentUser) {
		throw new Error("User not authenticated");
	}

	const q = query(
		collection(db, collectionName),
		where("userId", "==", UID || currentUser.uid) // Use UId or fallback to currentUser.uids
	);

	const querySnapshot = await getDocs(q);

	if (querySnapshot.empty) {
		return null;
	}

	// Assuming you want the first matching document:
	const docData = querySnapshot.docs[0].data() as T;
	return docData;
};
