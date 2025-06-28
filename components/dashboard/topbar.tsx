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

interface TopbarProps {
	type: "user" | "admin";
}

export function Topbar({ type }: TopbarProps) {
	return (
		<header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 text-center">
			<div className="flex items-center gap-4">
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
								{type === "user" ? "John Doe" : "Admin User"}
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
						<DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
