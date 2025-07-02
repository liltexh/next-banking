import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export const logUserOut = async (): Promise<void> => {
	try {
		await signOut(auth);
		console.log("user signed out succecfully");
	} catch (error) {
		console.error("Error Signing Out", error);
	}
};
