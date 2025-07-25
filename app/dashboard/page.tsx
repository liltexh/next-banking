"use client";

import { useState, useEffect } from "react";
import { UserDashboard } from "@/components/dashboard/user-dashboard";
import { AdminDashboard } from "@/components/dashboard/admin-dashboard";

import { useRouter } from "next/navigation"; // ✅ App Router version

import { useUserStore } from "@/store/useUserStore";
import LoadingAnimation01 from "@/components/LoadingAnimation01";

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
			if (loading) return; // Wait until auth check is complete
			if (!user) {
				router.push("/access/sign-in");
				console.log(
					"from the dashboard page no user found, redirecting to login"
				);
			}
			console.log("a user was found", user);
			if (user?.isAdmin) {
				console.log("he is an admin", user);
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
		return (
			<div className="p-4">
				<p>Loading dashboard...</p>
				<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-red-600 w-20 aspect-square p-4 ">
					<LoadingAnimation01 className="w-full h-full border-4" />
				</span>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Render the appropriate dashboard based on user type */}
			{dashboardType === "user" ? <UserDashboard /> : <AdminDashboard />}
		</div>
	);
}
