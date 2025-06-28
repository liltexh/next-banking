"use client";

import { useState } from "react";
import { UserDashboard } from "@/components/dashboard/user-dashboard";
import { AdminDashboard } from "@/components/dashboard/admin-dashboard";
import { Button } from "@/components/ui/button";

export default function Home() {
	const [dashboardType, setDashboardType] = useState<"user" | "admin">("user");

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Demo Toggle - Remove in production */}
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
			</div>

			{dashboardType === "user" ? <UserDashboard /> : <AdminDashboard />}
		</div>
	);
}
