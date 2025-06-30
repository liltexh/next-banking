// hooks/useUpdateUserDocument.ts
import { useState, useCallback } from "react";
import { updateUserDocumentByIdentifier } from "./updateUserDocumentByIdentifier";

type UseUpdateUserDocReturn = {
	update: (
		collectionName: string,
		identifier: string,
		updateData: Record<string, any>
	) => Promise<boolean>;
	loading: boolean;
	error: string | null;
};

export const useUpdateUserDocument = (): UseUpdateUserDocReturn => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const update = useCallback(
		async (
			collectionName: string,
			identifier: string,
			updateData: Record<string, any>
		) => {
			setLoading(true);
			setError(null);

			try {
				const result = await updateUserDocumentByIdentifier(
					collectionName,
					identifier,
					updateData
				);
				return result;
			} catch (err: any) {
				setError(err.message || "Update failed.");
				return false;
			} finally {
				setLoading(false);
			}
		},
		[]
	);

	return { update, loading, error };
};
