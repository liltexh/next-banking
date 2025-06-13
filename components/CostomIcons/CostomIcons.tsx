import React from "react";

type PropType = {
	className?: String;
};

const BackIcon: React.FC<PropType> = (props) => {
	const { className } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`ionicon ${className}`}
			viewBox="0 0 512 512"
		>
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="40"
				d="M328 112L184 256l144 144"
			/>
		</svg>
	);
};
const FowrardIcon: React.FC<PropType> = (props) => {
	const { className } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`ionicon ${className}`}
			viewBox="0 0 512 512"
		>
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="40"
				d="M184 112l144 144-144 144"
			/>
		</svg>
	);
};

export { BackIcon, FowrardIcon };
