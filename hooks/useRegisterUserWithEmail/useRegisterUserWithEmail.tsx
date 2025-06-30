// hooks/useRegisterUser.ts
import { useState, useCallback } from "react";
import { registerUserWithEmail } from "./registerUserWithEmail";
import { UserCredential } from "firebase/auth";

type UseRegisterUserReturn = {
	register: (email: string, password: string) => Promise<UserCredential | null>;
	loading: boolean;
	error: string | null;
};

export const useRegisterUser = (): UseRegisterUserReturn => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const register = useCallback(async (email: string, password: string) => {
		setLoading(true);
		setError(null);
		try {
			const userCredential = await registerUserWithEmail(email, password);
			return userCredential;
		} catch (err: any) {
			setError(err.message || "Registration failed.");
			return null;
		} finally {
			setLoading(false);
		}
	}, []);

	return { register, loading, error };
};
