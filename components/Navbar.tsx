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
import { link } from "fs";
{
	/*please remember to make the logo icon dynamic*/
}
type navigationRoute = {
	name: string;
	link: string;
};
const NAVIGATION_ROUTES: navigationRoute[] = [
	{ name: "Banking", link: "/banking" },
	{ name: "About", link: "/about/about-us" },
	{ name: "Get In Touch", link: "/get-in-touch" },
	{ name: "Lending", link: "#" },
];
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
						{NAVIGATION_ROUTES.map((item, idx: number) => (
							<NavigationMenuItem key={idx}>
								<Link
									href={item.link}
									className="relative text-gray-700 hover:text-primary-500 transition text-lg font-semibold  last:mr-8 active:text-primary-500 animate-underline after:border-primary-500"
								>
									{item.name}
								</Link>
							</NavigationMenuItem>
						))}
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
						className="bg-primary-500 p-4 border-r border-black text-white w-[60%]"
					>
						<div className="w-full h-[20%]">Extra logo</div>
						<div className="flex flex-col space-y-2">
							{NAVIGATION_ROUTES.map((item, idx: number) => (
								<span className="py-2 border-t border-white/30  last:border-b last:pb-4">
									<Link
										key={idx}
										href={item.link}
										className="relative after:absolute after:content-[''] after:block after:w-0 after:border-b after:border-white after:h-0.5 after:mt-1 hover:after:w-full after:transition-all after:duration-300 active:text-primary-600 active:after:border-primary-600"
									>
										{item.name}
									</Link>
								</span>
							))}
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
