import SubNav from "@/components/SubNav";
import React, { Suspense } from "react";

function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Suspense fallback={<div>Loading page...</div>}>
			<div className="py-0">
				<SubNav />
				{children}
			</div>
		</Suspense>
	);
}

export default layout;
