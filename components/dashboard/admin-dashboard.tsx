"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
import { AdminOverview } from "@/components/dashboard/admin-overview";
import { UserAccounts } from "@/components/dashboard/user-accounts";
import { AdminSendFunds } from "@/components/dashboard/admin-send-funds";
import { ScheduledTransfers } from "@/components/dashboard/scheduled-transfers";

export function AdminDashboard() {
	const [activeSection, setActiveSection] = useState("overview");

	const renderContent = () => {
		switch (activeSection) {
			case "overview":
				return <AdminOverview />;
			case "users":
				return <UserAccounts />;
			case "send":
				return <AdminSendFunds />;
			case "scheduled":
				return <ScheduledTransfers />;
			default:
				return <AdminOverview />;
		}
	};

	return (
		<div className="flex h-screen bg-white">
			<Sidebar
				type="admin"
				activeSection={activeSection}
				onSectionChange={setActiveSection}
			/>
			<div className="flex-1 flex flex-col ml-16 ">
				<Topbar type="admin" />
				<main className="flex-1 overflow-auto p-4 bg-gray-50">
					{renderContent()}
				</main>
			</div>
		</div>
	);
}
