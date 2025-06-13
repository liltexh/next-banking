import React from "react";

type PropType = {
	className?: string;
	children?: React.ReactNode;
};

const Button03: React.FC<PropType> = (props) => {
	const { className, children } = props;
	return (
		<div
			className={` text-xl ${className} w-14 aspect-square bg-white/35 flex justify-center items-center`}
		>
			{children}
		</div>
	);
};

export default Button03;
