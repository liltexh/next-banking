import React from "react";

type PropType = {
	className?: string;
	children?: React.ReactNode;
	doClick?: any;
};

const Button03: React.FC<PropType> = (props) => {
	const { className, children, doClick } = props;
	return (
		<button
			className={` text-xl ${className} w-14 aspect-square bg-white/35 flex justify-center items-center`}
			onClick={doClick}
		>
			{children}
		</button>
	);
};

export default Button03;
