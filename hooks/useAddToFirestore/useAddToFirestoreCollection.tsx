// hooks/useFirestoreAdd.ts
import { useState, useCallback } from "react";
import { addToCollection } from "./addToFirestoreCollection";

type UseFirestoreAddReturn<T extends object> = {
	addDocument: (collectionName: string, data: T) => Promise<string | null>;
	loading: boolean;
	error: string | null;
};

export const useAddToFirestore = <
	T extends object
>(): UseFirestoreAddReturn<T> => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const addDocument = useCallback(async (collectionName: string, data: T) => {
		setLoading(true);
		setError(null);
		try {
			const id = await addToCollection<T>(collectionName, data);
			return id;
		} catch (err: any) {
			setError(err.message || "Unknown error");
			return null;
		} finally {
			setLoading(false);
		}
	}, []);

	return { addDocument, loading, error };
};
