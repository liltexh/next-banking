"use client";
import { useEffect, useState } from "react";
import {
	LayoutDashboard,
	ArrowDownToLine,
	ArrowUpFromLine,
	Send,
	History,
	Users,
	Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
	type: "user" | "admin";
	activeSection: string;
	onSectionChange: (section: string) => void;
}

export function Sidebar({
	type,
	activeSection,
	onSectionChange,
}: SidebarProps) {
	const [activeSidebar, setActiveSideBar] = useState(false);
	const [deviceType, setDeviceType] = useState("");
	const userNavItems = [
		{ id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
		{ id: "deposit", label: "Deposit Funds", icon: ArrowDownToLine },
		{ id: "withdraw", label: "Withdraw Funds", icon: ArrowUpFromLine },
		{ id: "send", label: "Send Money", icon: Send },
		{ id: "history", label: "Transaction History", icon: History },
	];

	const adminNavItems = [
		{ id: "overview", label: "Overview", icon: LayoutDashboard },
		{ id: "users", label: "User Accounts", icon: Users },
		{ id: "send", label: "Send Funds", icon: Send },
		{ id: "scheduled", label: "Scheduled Transfers", icon: Calendar },
	];

	const navItems = type === "user" ? userNavItems : adminNavItems;
	const getDeviceType = (width: number) => {
		if (width < 768) {
			return "mobile";
		} else if (width >= 768 && width <= 1024) {
			return "tablet";
		} else {
			return "desktop";
		}
	};

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			const currentType = getDeviceType(width);
			setDeviceType(currentType);
		};
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div
			className={cn(
				"bg-white border-r border-gray-200 flex flex-col",
				deviceType == "mobile" ? "w-28" : "w-72"
			)}
		>
			<div className="p-6 border-b border-gray-200">
				<div className="flex flex-col md:flex-row text-center items-center gap-3">
					<div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
						<span className="text-white font-bold text-sm">G</span>
					</div>
					<span className="font-semibold text-slate-800">GlobeTrust</span>
				</div>
			</div>

			<nav className="flex-1 p-2">
				<ul className="space-y-2">
					{navItems.map((item) => {
						const Icon = item.icon;
						return (
							<li key={item.id}>
								<button
									onClick={() => onSectionChange(item.id)}
									className={cn(
										"w-full flex items-center gap-x-3 gap-y-1 px-4 py-2 rounded-lg text-left transition-colors",
										activeSection === item.id
											? "bg-red-50 text-red-600 border border-red-200"
											: "text-slate-600 hover:bg-gray-50 hover:text-slate-800",
										deviceType == "mobile" && "flex-col text-center"
									)}
								>
									<Icon className="w-5 h-5" />
									<span className="font-medium">{item.label}</span>
								</button>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}
