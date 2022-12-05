import React from "react";
import Image from "next/image";
import beauty_01 from "../public/Beauty-01.png";
import beauty_02 from "../public/Beauty-02.png";
import beauty_03 from "../public/Beauty-03.png";

const PortfolioSection = () => {
	return (
		<section>
			<div className="bg-star-light-tone rounded-sm">
				<h2 className="text-5xl flex justify-center py-3 w-100 h-auto drop-shadow-xl pt-16">
					Portfolio
				</h2>
				<a
					href="https://jonathandiz.github.io/web-api-desafio/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src={beauty_01}
						alt={beauty_01}
						width={300}
						height={300}
						className="cursor-pointer"
					/>
					<Image
						src={beauty_02}
						alt={beauty_02}
						width={300}
						height={300}
						className="cursor-pointer"
					/>
					<Image
						src={beauty_03}
						alt={beauty_03}
						width={300}
						height={300}
						className="cursor-pointer"
					/>
				</a>
			</div>
		</section>
	);
};

export default PortfolioSection;
