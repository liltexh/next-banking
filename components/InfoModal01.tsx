import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
type modalType = {
	className?: string;
	children: React.ReactElement;
	link: string;
};
const InfoModal01: React.FC<modalType> = (props) => {
	const { className, children, link } = props;

	return (
		<div
			className={cn(
				"fixed inset-0 z-50 flex items-center justify-center bg-black/50",
				className
			)}
		>
			<div className="bg-white shadow-lg p-6 max-w-lg text-center">
				{children}
				<Link href={link}>
					<button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md">
						Okay
					</button>
				</Link>
			</div>
		</div>
	);
};

export default InfoModal01;
