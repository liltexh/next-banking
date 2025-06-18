import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CreditCard, LogIn, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import Button04 from "./Button04";
{
	/*please remember to make the logo icon dynamic*/
}
function Navbar() {
	return (
		<nav className="relative w-full min-h-26 z-50 pt-3 flex flex-col justify-center bg-beige-100 main-p mb-1 lg:mb-0">
			<div className="absolute bottom-0 left-4 lg:left-32 bg-gradient-to-r from-primary-600 to-primary-500 text-white w-[250px] h-[176px] flex justify-center items-center">
				<Link
					href="#"
					className="text-xl font-bold"
				>
					Logo
				</Link>
			</div>
			{/* Desktop Nav */}
			<div className="hidden xl:flex items-center space-x-6 ml-auto py-8">
				<NavigationMenu>
					<NavigationMenuList className="flex space-x-4">
						{["Plans", "Pricing", "Features", "About", "Get In Touch"].map(
							(item) => (
								<NavigationMenuItem key={item}>
									<Link
										href="/get-in-touch"
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
			<div className="xl:hidden ml-auto">
				<Sheet>
					<SheetTrigger>
						<Menu className="w-8 h-8 text-primary-500 hover:text-gray-600" />
					</SheetTrigger>
					<SheetContent
						side="left"
						className="bg-white p-4"
					>
						<div className="flex flex-col space-y-2">
							{["Plans", "Pricing", "Features", "About", "Get In Touch"].map(
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

			<div className="hidden lg:flex bg-primary-500 py-4 pr-[10%] justify-end items-center text-lg text-white">
				<p>
					<span className="font-semibold">Updates: {"  "}</span>Get upto 4%* on
					our Savings Account Balances with Finbank{" "}
					<Link href="#">More Details</Link>
				</p>
			</div>
		</nav>
	);
}

export default Navbar;
