"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
import { DashboardOverview } from "@/components/dashboard/dashboard-overview";
import { DepositFunds } from "@/components/dashboard/deposit-funds";
import { WithdrawFunds } from "@/components/dashboard/withdraw-funds";
import { SendMoney } from "@/components/dashboard/send-money";
import { TransactionHistory } from "@/components/dashboard/transaction-history";

export function UserDashboard() {
	const [activeSection, setActiveSection] = useState("dashboard");

	const renderContent = () => {
		switch (activeSection) {
			case "dashboard":
				return <DashboardOverview />;
			case "deposit":
				return <DepositFunds />;
			case "withdraw":
				return <WithdrawFunds />;
			case "send":
				return <SendMoney />;
			case "history":
				return <TransactionHistory />;
			default:
				return <DashboardOverview />;
		}
	};

	return (
		<div className="flex h-screen bg-white">
			<Sidebar
				type="user"
				activeSection={activeSection}
				onSectionChange={setActiveSection}
			/>
			<div className="flex-1 flex flex-col">
				<Topbar type="user" />
				<main className="flex-1 overflow-auto p-4 bg-gray-50">
					{renderContent()}
				</main>
			</div>
		</div>
	);
}
