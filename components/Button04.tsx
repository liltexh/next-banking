import React from "react";

type PropType = {
	className?: string;
	children?: React.ReactNode;
};

const Button04: React.FC<PropType> = (props) => {
	const { className, children } = props;
	return (
		<div
			className={` text-lg flex justify-center items-center p-3 px-6 shadow-lg ${className}`}
		>
			{children}
		</div>
	);
};

export default Button04;
