"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Button01 from "./Button01";

type ExchangeRate = {
	icon: string;
	name: string;
	send: number;
	receive: number;
};

// 🔁 Static fallback rates (if API fails)
const FALLBACK_RATES: ExchangeRate[] = [
	{ icon: "/images/flag-1.png", name: "usd", send: 1540.0, receive: 1480.0 },
	{ icon: "/images/flag-2.png", name: "sek", send: 141.5, receive: 134.3 },
	{ icon: "/images/flag-3.png", name: "gbp", send: 1965.0, receive: 1890.0 },
	{ icon: "/images/flag-4.png", name: "jpy", send: 10.25, receive: 9.8 },
	{ icon: "/images/flag-5.png", name: "aud", send: 1020.0, receive: 970.0 },
	{ icon: "/images/flag-6.png", name: "cad", send: 1150.0, receive: 1085.0 },
];

const BASE = "NGN";
const SYMBOLS = ["USD", "SEK", "GBP", "JPY", "AUD", "CAD"];

export default function ForignExchange() {
	const [rates, setRates] = useState<ExchangeRate[]>(FALLBACK_RATES);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchRates = async () => {
			try {
				const res = await axios.get(
					`https://api.exchangerate.host/latest?base=${BASE}&symbols=${SYMBOLS.join(
						","
					)}`
				);
				const fetched = res.data?.rates;
				if (!fetched) throw new Error("Invalid API response");

				const liveRates: ExchangeRate[] = SYMBOLS.map((code, index) => {
					const receive = fetched[code]; // NGN -> Code
					const send = 1 / receive; // Code -> NGN
					return {
						icon: `/images/flag-${index + 1}.png`,
						name: code.toLowerCase(),
						send: (send * 1000).toFixed(2) as unknown as number, // pseudo-adjusted send
						receive: receive.toFixed(2) as unknown as number,
					};
				});

				setRates(liveRates);
			} catch (err) {
				console.error(
					"❌ Failed to fetch exchange rates. Using fallback.",
					err
				);
				setRates(FALLBACK_RATES);
			} finally {
				setLoading(false);
			}
		};

		fetchRates();
	}, []);

	return (
		<section className="bg-black text-white w-full main-p main-py text-center overflow-hidden">
			<div className="w-full flex flex-col gap-14 mb-20">
				<div className="flex flex-col justify-center items-center gap-4">
					<h1 className="text-5xl">Foreign Exchange Rates</h1>
					<p className="text-white/50 text-xl">Live or fallback rates</p>
				</div>
				<div className="w-full flex flex-col lg:flex-row justify-start items-start gap-y-4 gap-x-10 text-start px-4">
					<Button01
						texts="Money Send & Receive"
						className="border-x border-t border-primary-600 text-primary-600 scale-110"
					/>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row gap-4 flex-wrap justify-center">
				{rates.map((rate, idx) => (
					<div
						key={idx}
						className="flex flex-col w-full lg:w-64 border border-white/30 pt-4 gap-4 justify-between items-center hover:bg-white/10 transition-all duration-300 cursor-pointer"
					>
						<div>
							<img
								src={rate.icon}
								alt={`${rate.name} flag`}
								className="w-14 aspect-square rounded-full border-2 border-white/30 mx-auto mb-2.5 object-cover"
							/>
							<p className="text-xl uppercase">{rate.name}</p>
						</div>
						<div className="w-full bg-white/10 text-lg text-white/60">
							<div className="flex justify-between items-center w-full border-b border-white/30 px-4 min-h-14">
								<p className="min-w-16">Send :</p>
								<p>{rate.send.toLocaleString()}</p>
							</div>
							<div className="w-full flex justify-between items-center px-4 min-h-14">
								<p className="min-w-16">Receive :</p>
								<p>{rate.receive.toLocaleString()}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
