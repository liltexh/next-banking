type loaderProps = {
	className?: string;
};
function LoadingAnimation01(props: loaderProps) {
	const { className } = props;
	return (
		<div
			className={`w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin ${className}`}
		></div>
	);
}

export default LoadingAnimation01;
