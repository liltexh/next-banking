"use client";

import { useState, useEffect } from "react";
import { UserDashboard } from "@/components/dashboard/user-dashboard";
import { AdminDashboard } from "@/components/dashboard/admin-dashboard";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase"; // Adjust the import based on your Firebase setup
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation"; // ✅ App Router version
import { useFirestoreDocument } from "@/hooks/useFirestoreDocument/useFirestoreDocument";
import { useUserStore } from "@/store/useUserStore";

// type profile = {
// 	isAdmin: boolean;
// };

export default function Home() {
	const [dashboardType, setDashboardType] = useState<"user" | "admin">("user");
	// const { data: userData } = useFirestoreDocument<profile>("users");
	const { user, loading } = useUserStore();
	const router = useRouter();

	useEffect(() => {
		const checkUser = () => {
			if (loading) {
				return; // or return a loading spinner
			}
			if (!user) {
				router.push("/");
				console.log(
					"from the dashboard page no user found, redirecting to login"
				);
			}
			console.log("a user was found", user);
			if (user?.isAdmin) {
				console.log("he is an admin");
				setDashboardType("admin");
			} else {
				console.log("he is not admin");
				setDashboardType("user");
			}
		};
		checkUser();
		return () => checkUser();
	}, [user, loading]);

	// while waiting for Zustand auth logic
	if (loading) {
		return <div className="p-4">Loading dashboard...</div>;
	}

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Demo Toggle - Remove in production 
			 <div className="fixed bottom-4 right-4 z-50 bg-white p-2 rounded-lg shadow-md border">
				<div className="flex gap-2">
					<Button
						variant={dashboardType === "user" ? "default" : "outline"}
						size="sm"
						onClick={() => setDashboardType("user")}
						className="bg-red-600 hover:bg-red-700"
					>
						User Dashboard
					</Button>
					<Button
						variant={dashboardType === "admin" ? "default" : "outline"}
						size="sm"
						onClick={() => setDashboardType("admin")}
						className="bg-red-600 hover:bg-red-700"
					>
						Admin Dashboard
					</Button>
				</div>
			</div> */}

			{dashboardType === "user" ? <UserDashboard /> : <AdminDashboard />}
		</div>
	);
}
