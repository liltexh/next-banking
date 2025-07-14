import React from "react";
import Button01 from "./Button01";
type excangeRate = {
	icon: string;
	name: string;
	send: number;
	recieve: number;
};

const EXCHANGERATE: excangeRate[] = [
	{ icon: "/images/flag-1.png", name: "usd", send: 63.82, recieve: 53.2 },
	{ icon: "/images/flag-2.png", name: "sek", send: 63.82, recieve: 53.2 },
	{ icon: "/images/flag-3.png", name: "gbp", send: 63.82, recieve: 53.2 },
	{ icon: "/images/flag-4.png", name: "jpy", send: 63.82, recieve: 53.2 },
	{ icon: "/images/flag-5.png", name: "aud", send: 63.82, recieve: 53.2 },
	{ icon: "/images/flag-6.png", name: "cad", send: 63.82, recieve: 53.2 },
];

const ForignExchange = () => {
	return (
		<section className="bg-black text-white w-full main-p main-py text-center overflow-hidden">
			<div className="w-full flex flex-col gap-14 mb-20">
				<div className="flex flex-col justify-center items-center gap-4">
					<h1 className="text-5xl">Foreign Exchange Rates</h1>
					<p className="text-white/50 text-xl">
						lorem hfjh hdhqi ihfiwhf ihewjehi
					</p>
				</div>
				<div className="w-full flex flex-col lg:flex-row justify-start items-start gap-y-4 gap-x-10 text-start px-4">
					<Button01
						texts="Money Send & Recieve"
						className="border-x border-t border-primary-600 text-primary-600 scale-110"
					/>
					{/* <Button01
						texts="Load & Redeem Forex Card"
						className="border-x border-b border-white/30 text-white/60 scale-110"
					/> */}
				</div>
			</div>
			<div className="flex flex-col lg:flex-row gap-4">
				{EXCHANGERATE.map((rate, idx) => {
					return (
						<div
							className="flex flex-col  w-full border border-white/30 pt-4 gap-4 justify-between items-center hover:bg-white/10 transition-all duration-300 cursor-pointer"
							key={idx}
						>
							<div>
								<img
									src={rate.icon}
									alt=""
									className="w-14 aspect-square rounded-full border-2 border-white/30 mx-auto mb-2.5 object-cover"
								/>

								<p className="text-xl">{rate.name}</p>
							</div>
							<div className="w-full bg-white/10 text-lg text-white/60">
								<div className="flex justify-between items-center w-full border-b border-white/30 px-4 min-h-14">
									<p className="min-w-16 flex justify-between">
										Send <span>:</span>
									</p>
									<p>{rate.send}</p>
								</div>
								<div className="w-full flex justify-between items-center px-4 min-h-14">
									<p className="min-w-16 flex justify-between">
										Recive <span>:</span>
									</p>
									<p>{rate.recieve}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ForignExchange;
