import { Star } from "lucide-react";
import React from "react";
type tst = {
	image: string;
	name: string;
	position: string;
};

const TEAMS: tst[] = [
	{
		image: "/images/team-v1-1.jpg",
		name: "diji hsihis iscjsicjhi",
		position: "yfbvwuf uwfhfuih",
	},
	{
		image: "/images/team-v1-3.jpg",
		name: "diji hsihis iscjsicjhi",
		position: "yfbvwuf uwfhfuih",
	},
	{
		image: "/images/team-v1-4.jpg",
		name: "diji hsihis iscjsicjhi",
		position: "yfbvwuf uwfhfuih",
	},
	{
		image: "/images/team-v1-5.jpg",
		name: "diji hsihis iscjsicjhi",
		position: "yfbvwuf uwfhfuih",
	},
	{
		image: "/images/team-v1-6.jpg",
		name: "diji hsihis iscjsicjhi",
		position: "yfbvwuf uwfhfuih",
	},
	{
		image: "/images/team-v1-7.jpg",
		name: "diji hsihis iscjsicjhi",
		position: "yfbvwuf uwfhfuih",
	},
	{
		image: "/images/team-v1-8.jpg",
		name: "diji hsihis iscjsicjhi",
		position: "yfbvwuf uwfhfuih",
	},
	{
		image: "/images/team-v1-1.jpg",
		name: "diji hsihis iscjsicjhi",
		position: "yfbvwuf uwfhfuih",
	},
];

function ManagementTeam() {
	return (
		<section className="main-p main-py bg-beige-100 flex flex-col gap-16">
			<div className="text-center m-auto">
				<h4 className="main-h4-01 mb-4">Our Management Team</h4>
				<p className="main-p-01">Team of diverse and talented leaders.</p>
			</div>
			<div className="w-full flex flex-col lg:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
				{TEAMS.map((team, idx: number) => {
					return (
						<div
							className={`flex flex-col justify-center items-center gap-6`}
							key={idx}
						>
							<span
								className="w-full"
								style={{ aspectRatio: "3/4" }}
							>
								<img
									src={team.image}
									alt=""
									className="w-full h-full object-cover grayscale"
								/>
							</span>
							<span className="w-full flex flex-col justify-center items-center">
								<p className="text-black text-2xl font-semibold">{team.name}</p>
								<p className="text-primary-500 text-lg">{team.position}</p>
							</span>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default ManagementTeam;
