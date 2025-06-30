// lib/authUtils.ts
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "@/lib/firebase"; // make sure this is your initialized Firebase auth

export const signInWithEmail = async (
	email: string,
	password: string
): Promise<UserCredential> => {
	const userCredential = await signInWithEmailAndPassword(
		auth,
		email,
		password
	);
	return userCredential;
};
