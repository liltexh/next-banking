// lib/firestoreUtils.ts
import {
	collection,
	getDocs,
	query,
	where,
	updateDoc,
	doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export const updateUserDocumentByIdentifier = async (
	collectionName: string,
	identifier: string, // email or account number
	updateData: Record<string, any>
): Promise<boolean> => {
	const q = query(
		collection(db, collectionName),
		where("email", "==", identifier)
	);

	const q2 = query(
		collection(db, collectionName),
		where("accountNumber", "==", identifier)
	);

	const [emailSnapshot, accountSnapshot] = await Promise.all([
		getDocs(q),
		getDocs(q2),
	]);

	const docSnapshot = !emailSnapshot.empty
		? emailSnapshot.docs[0]
		: !accountSnapshot.empty
		? accountSnapshot.docs[0]
		: null;

	if (!docSnapshot) {
		throw new Error("No matching document found for given identifier.");
	}

	const docRef = doc(db, collectionName, docSnapshot.id);

	await updateDoc(docRef, updateData); // merge/update fields

	return true;
};
