import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";

import Feature01 from "@/components/Feature01";
import ForignExchange from "@/components/ForignExchange";
import Hero from "@/components/Hero";
import QandA from "@/components/QandA";

export default function Home() {
	return (
		<>
			<Theme>
				<Hero />
				<Feature01 />
				<ForignExchange />
				<QandA />
			</Theme>
		</>
	);
}
