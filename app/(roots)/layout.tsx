import React from "react";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/Navbar";
import BankingFooter from "@/components/Footer";
function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Theme>
			<div className="py-0">
				<Navbar />
				{children}
				<BankingFooter />
			</div>
		</Theme>
	);
}

export default layout;
