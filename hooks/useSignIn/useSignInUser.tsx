// hooks/useSignInUser.ts
import { useState, useCallback } from "react";
import { signInWithEmail } from "./signIn";
import { UserCredential } from "firebase/auth";

type UseSignInUserReturn = {
	signIn: (email: string, password: string) => Promise<UserCredential | null>;
	loading: boolean;
	error: string | null;
};

export const useSignInUser = (): UseSignInUserReturn => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const signIn = useCallback(async (email: string, password: string) => {
		setLoading(true);
		setError(null);
		try {
			const userCredential = await signInWithEmail(email, password);
			return userCredential;
		} catch (err: any) {
			setError(err.message || "Login failed.");
			return null;
		} finally {
			setLoading(false);
		}
	}, []);

	return { signIn, loading, error };
};
