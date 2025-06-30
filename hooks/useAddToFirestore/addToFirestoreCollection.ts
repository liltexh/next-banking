import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase"; // your Firestore instance

// Generic function
export const addToCollection = async <T extends object>(
	collectionName: string,
	data: T
): Promise<string | null> => {
	try {
		const docRef = await addDoc(collection(db, collectionName), data);
		console.log("Document written with ID:", docRef.id);
		return docRef.id;
	} catch (error) {
		console.error("Error adding document:", error);
		return null;
	}
};
