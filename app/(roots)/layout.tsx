import React from "react";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/Navbar";
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
			</div>
		</Theme>
	);
}

export default layout;
