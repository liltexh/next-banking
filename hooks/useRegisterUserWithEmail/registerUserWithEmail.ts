// lib/authUtils.ts
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "@/lib/firebase";

export const registerUserWithEmail = async (
	email: string,
	password: string
): Promise<UserCredential> => {
	const userCredential = await createUserWithEmailAndPassword(
		auth,
		email,
		password
	);
	return userCredential;
};
