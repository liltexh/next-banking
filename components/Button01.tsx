import React from "react";

type PropType = {
	texts: String;
	className?: String;
};

const Button01: React.FC<PropType> = (props) => {
	const { texts, className } = props;
	return (
		<div className={`p-3 font-semibold min-w-60 ${className}`}>{texts}</div>
	);
};

export default Button01;
