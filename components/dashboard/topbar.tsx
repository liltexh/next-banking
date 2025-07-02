"use client";

import { Bell, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/dashboard/ui/dropdown-menu";
import { useUserStore } from "@/store/useUserStore";
import { useEffect, useState } from "react";
import { logUserOut } from "@/lib/firebaseUtils/logUserOut";

interface TopbarProps {
	type: "user" | "admin";
}

type userType = {
	name: string;
	email: string;
	Fname: string;
	Mname: string;
	Lname: string;
	// Add other user properties as needed
};

export function Topbar({ type }: TopbarProps) {
	const { user, loading } = useUserStore();
	const [userInfo, setUserInfo] = useState<userType | null>(null);
	useEffect(() => {
		const checkUser = () => {
			if (loading) {
				return; // or return a loading spinner
			}
			if (!user) {
				console.log("No user found, redirecting to login");
				// Redirect logic can be added here if needed
			} else {
				const { name, email } = user;
				const { Fname = "User", Mname = "", Lname = "" } = user.otherInfo || {};
				setUserInfo({ name, email, Fname, Mname, Lname });
			}
		};
		checkUser();
		return () => checkUser();
	}, [user, loading]);

	return (
		<header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 text-center">
			<div className="flex items-center gap-4 ml-16">
				<h1 className="md:text-xl font-semibold text-slate-800">
					{type === "user" ? "My Banking" : "Admin Portal"}
				</h1>
			</div>

			<div className="flex items-center gap-4">
				{/* {type === "user" && (
					<div className="text-right">
						<p className="text-sm text-slate-600">Available Balance</p>
						<p className="text-lg font-semibold text-slate-800">$12,847.32</p>
					</div>
				)} */}

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="flex items-center gap-2"
						>
							<div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
								<User className="w-4 h-4 text-slate-600" />
							</div>
							<span className="text-slate-800 font-medium">
								{type === "user"
									? `${userInfo?.Fname} ${userInfo?.Mname} ${userInfo?.Lname}`
									: "Admin User"}
							</span>
							<ChevronDown className="w-4 h-4 text-slate-600" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="w-48"
					>
						<DropdownMenuItem>Profile Settings</DropdownMenuItem>
						<DropdownMenuItem>Account Preferences</DropdownMenuItem>
						{type === "admin" && (
							<>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Admin Tools</DropdownMenuItem>
								<DropdownMenuItem>System Settings</DropdownMenuItem>
							</>
						)}
						<DropdownMenuItem>
							<Button
								variant="link"
								size="icon"
								className="w-full relative flex justify-start items-center font-normal"
							>
								Notification
								<Bell className="w-5 h-5 text-slate-600 ml-auto" />
								<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full"></span>
							</Button>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="text-red-600">
							<button onClick={logUserOut}>Logout</button>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
