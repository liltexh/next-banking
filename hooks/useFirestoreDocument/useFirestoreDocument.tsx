// hooks/useUserDocument.ts
import { useEffect, useState } from "react";
import { getFirestoreDocument } from "../../lib/firebaseUtils/getFirestoreDocument";

type UseUserDocumentResult<T> = {
	data: T | null;
	loading: boolean;
	error: string | null;
};

export const useFirestoreDocument = <T,>(
	userId: string,
	collectionName: string
): UseUserDocumentResult<T> => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchDoc = async () => {
			setLoading(true);
			setError(null);

			try {
				const result = await getFirestoreDocument<T>(userId, collectionName);
				setData(result);
			} catch (err: any) {
				setError(err.message || "Failed to fetch document");
			} finally {
				setLoading(false);
			}
		};

		fetchDoc();
	}, [collectionName]);

	return { data, loading, error };
};
