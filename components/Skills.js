import React from "react";
import agile from "../public/agile-methodology.webp";
import js from "../public/javascript.png";
import react from "../public/react.png";
import angular from "../public/angular.png";
import design from "../public/design.png";
import Image from "next/image";

const Skills = () => {
	return (
		<section>
			<div className="bg-white rounded-md text-3xl flex justify-center first:gap-16 py-3 w-100 h-auto drop-shadow-xl mt-20 overflow-hidden md:h-auto md:w-100">
				<h2>Skills</h2>
				<Image src={agile} width={60} height={60} alt={agile}/>
				<Image src={angular} width={60} height={60} alt={angular}/>
				<Image src={react} width={60} height={60} alt={react}/>
				<Image src={js} width={60} height={60} alt={js}/>
				<Image src={design} width={60} height={60} alt={design}/>
			</div>
		</section>
	);
};

export default Skills;
