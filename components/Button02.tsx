import React from "react";

type PropType = {
	texts: string;
	className?: string;
};

const Button02: React.FC<PropType> = (props) => {
	const { texts, className } = props;
	return (
		<div
			className={`relative flex justify-center items-center w-fit p-4 text-black text-xl bg-transparent overflow-hidden  
  before:absolute  before:bg-white before:w-full before:h-full before:-z-20
  before:transition-[width] before:duration-700 active:before:w-0 hover:before:w-0
  after:absolute after:bottom-0 after:w-full after:h-0 after:bg-primary-500 after:-z-10 after:rounded-t-[100%]
  after:transition-[height] after:duration-700 active:after:h-[200%] hover:after:h-[200%] hover:text-white active:text-white whitespace-nowrap
 ${className}`}
		>
			{texts}
		</div>
	);
};

export default Button02;
