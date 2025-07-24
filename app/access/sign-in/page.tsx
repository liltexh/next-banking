"use client";

import { SignIn } from "@/components/SignIn";
import { useSignInUser } from "@/hooks/useSignIn/useSignInUser";
import { useRouter } from "next/navigation";

export default function SignInPage() {
	const { signIn: signUserIn, loading, error } = useSignInUser();
	const router = useRouter();
	const handleSignIn = async (email: string, password: string) => {
		// Handle sign-in logic here
		try {
			const user = await signUserIn(email, password);
			if (user) {
				console.log("Sign in successful:", { email, password });
				router.push("/dashboard");
			} else {
				throw new Error("Sign in failed. Please check your credentials.");
			}
		} catch (error) {
			console.log("error while signing in", error);
		}
		// In a real app, you would:
		// 1. Validate credentials with your backend
		// 2. Store authentication token
		// 3. Redirect to dashboard
	};

	return (
		<SignIn
			LogInUser={handleSignIn}
			isLoading={loading}
		/>
	);
}
