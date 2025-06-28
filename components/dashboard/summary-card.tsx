import type { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SummaryCardProps {
	title: string;
	value: string;
	icon: ReactNode;
	trend?: string;
	trendUp?: boolean | null;
	highlighted?: boolean;
}

export function SummaryCard({
	title,
	value,
	icon,
	trend,
	trendUp,
	highlighted,
}: SummaryCardProps) {
	return (
		<div
			className={cn(
				"bg-white rounded-lg shadow-md p-6 border",
				highlighted ? "border-red-200 bg-red-50" : "border-gray-200"
			)}
		>
			<div className="flex items-center justify-between mb-4">
				<div className="p-2 bg-gray-100 rounded-lg">{icon}</div>
				{trendUp !== null && (
					<div
						className={cn(
							"flex items-center gap-1 text-sm",
							trendUp ? "text-green-600" : "text-red-600"
						)}
					>
						{trendUp ? (
							<TrendingUp className="w-4 h-4" />
						) : (
							<TrendingDown className="w-4 h-4" />
						)}
					</div>
				)}
			</div>

			<div>
				<h3 className="text-sm font-medium text-slate-600 mb-1">{title}</h3>
				<p className="text-2xl font-bold text-slate-800 mb-2">{value}</p>
				{trend && <p className="text-sm text-slate-500">{trend}</p>}
			</div>
		</div>
	);
}
