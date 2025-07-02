"use client";
import { useUserStore } from "@/store/useUserStore";
import { useEffect } from "react";
function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const listenToAuth = useUserStore((state) => state.listenToAuth);
	useEffect(() => {
		listenToAuth();
	}, [listenToAuth]);
	return <div className="py-0">{children}</div>;
}

export default Layout;
