import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CardSim, CreditCard, LogIn, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import Button04 from "./Button04";

function Navbar() {
	return (
		<nav className="w-full min-h-26 z-50 py-3 flex items-center justify-between bg-beige-100 main-p">
			<div>
				<Link
					href="#"
					className="text-xl font-bold text-blue-600"
				>
					Logo
				</Link>
			</div>
			{/* Desktop Nav */}
			<div className="hidden md:flex items-center space-x-6">
				<NavigationMenu>
					<NavigationMenuList className="flex space-x-4">
						{["Plans", "Pricing", "Features", "About", "Contact"].map(
							(item) => (
								<NavigationMenuItem key={item}>
									<Link
										href="about/about-us"
										className="text-gray-700 hover:text-blue-600 transition text-lg last:mr-8"
									>
										{item}
									</Link>
								</NavigationMenuItem>
							)
						)}
						<span className="flex gap-2 justify-center items-center">
							<Button04 className="gap-2 bg-black text-white">
								<LogIn /> Login
							</Button04>
							<Button04 className="gap-2 bg-white">
								<CreditCard /> Open an Account
							</Button04>
						</span>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			{/* Mobile Nav */}
			<div className="md:hidden">
				<Sheet>
					<SheetTrigger>
						<Menu className="w-8 h-8 text-primary-500 hover:text-gray-600" />
					</SheetTrigger>
					<SheetContent
						side="left"
						className="bg-white p-4"
					>
						<div className="flex flex-col space-y-2">
							{["Plans", "Pricing", "Features", "About", "Contact"].map(
								(item) => (
									<Link
										key={item}
										href="#"
										className="text-gray-700 hover:text-blue-600 transition"
									>
										{item}
									</Link>
								)
							)}
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
}

export default Navbar;
