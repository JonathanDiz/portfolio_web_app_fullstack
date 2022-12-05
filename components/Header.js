import React from "react";
import {
	AiFillTwitterCircle,
	AiFillGithub,
	AiFillLinkedin,
	AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import dev from "../public/dev.jpg";

const Header = () => {
	return (
		<section className="h-auto">
			<div className="bg-white rounded-md text-center p-10 drop-shadow-xl">
				<h2 className="text-5xl py-2 text-black font-medium md:text-6xl font-starjedi">
					jonathan díaz olivares
				</h2>
				<h3 className="text-2xl py-2 md:text-3xl">Developer full stack</h3>
				<p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
					Desarrollador Web con dominio en React, javascript, Angular y manejo
					de librerías para UI/UX, maquetación y diseño responsivo.
				</p>
			</div>
			<div className="bg-star-light-tone rounded-sm text-5xl flex justify-center gap-16 py-3">
				<a
					href="https://twitter.com/jjRepublicano"
					rel="noopener noreferrer"
				>
					<AiFillTwitterCircle className="cursor-pointer" />
				</a>
				<a
					href="https://github.com/JonathanDiz"
					rel="noopener noreferrer"
				>
					<AiFillGithub className="cursor-pointer" />
				</a>
				<a
					href="https://www.linkedin.com/in/jonathan-d%C3%ADaz-olivares/"
					rel="noopener noreferrer"
				>
					<AiFillLinkedin className="cursor-pointer" />
				</a>
				<a
					href="https://www.instagram.com/fitfat333/"
					rel="noopener noreferrer"
					
				>
					<AiFillInstagram className="cursor-pointer" />
				</a>
			</div>
			<div className="pb-16 drop-shadow-xl">
				<Image
					src={dev}
					alt={dev}
					className="relative mx-auto rounded-md w-80 h-80 mt-20 border-4 border-black"
				/>
			</div>
		</section>
	);
};

export default Header;
