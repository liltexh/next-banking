import Navbar from "@/components/Navbar";
import React from "react";

function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="py-0">
			<Navbar />
			{children}
		</div>
	);
}

export default layout;
