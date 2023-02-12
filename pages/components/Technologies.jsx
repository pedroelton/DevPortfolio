import React from "react";
import Cta from "./Cta";
import GaleryItem from "./GaleryItem";
import bgTechnology from "../../assets/bgResume.webp";
import htmlLogo from "../../assets/html-1.svg";
import cssLogo from "../../assets/css-3.svg";
import javaScriptLogo from "../../assets/logo-javascript.svg";
import reactLogo from "../../assets/react-2.svg";
import nextLogo from "../../assets/next-js.svg";
import tailwindLogo from "../../assets/tailwind-css2.svg";
import bootstrapLogo from "../../assets/Bootstrap.svg";
import sassLogo from "../../assets/Sass.svg";
import webflowLogo from "../../assets/icons8-webflow.svg";
import wordpressLogo from "../../assets/wordpress-blue.svg";
import shopifyLogo from "../../assets/shopify.svg";
import figmaLogo from "../../assets/figma-1.svg";

const Technologies = () => {
	return (
		<section
			className="flex justify-center align-middle lg:py-24 lg:w-[1400px] m-auto grid-cols-1 lg:grid-cols-2 lg:space-x-16 flex-wrap lg:flex-nowrap p-8 lg:p-0 space-y-12 lg:space-y-0"
			style={{
				backgroundImage: `url(${bgTechnology})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "contain",
				backgroundPosition: "center center",
			}}>
			<div className="flex md:w-[30vw] w-100 flex-wrap md:justify-start justify-center">
				<div className="m-8 flex justify-center items-center w-[64px] h-[64px] hover:translate-y-2 transition-all duration-300">
					<GaleryItem
						photo={htmlLogo.src}
						alt="HTML5"
					/>
				</div>
				<div className="m-8 flex justify-center items-center w-[64px] h-[64px] hover:translate-y-2 transition-all duration-300">
					<GaleryItem
						photo={cssLogo.src}
						alt="CSS3"
					/>
				</div>
				<div className="m-8 flex justify-center items-center w-[64px] h-[64px] hover:translate-y-2 transition-all duration-300">
					<GaleryItem
						photo={javaScriptLogo.src}
						alt="JavaScript"
					/>
				</div>
				<div className="m-8 flex justify-center items-center w-[64px] h-[64px] hover:translate-y-2 transition-all duration-300">
					<GaleryItem
						photo={reactLogo.src}
						alt="React"
					/>
				</div>
				<div className="bg-white rounded-full p-0 m-8 flex justify-center items-center w-[64px] h-[64px] hover:translate-y-2 transition-all duration-300">
					<GaleryItem
						photo={nextLogo.src}
						alt="NextJs"
					/>
				</div>
				<div className="m-8 flex justify-center items-center w-[64px] h-[64px] hover:translate-y-2 transition-all duration-300">
					<GaleryItem
						photo={tailwindLogo.src}
						alt="Tailwind"
					/>
				</div>
				<div className="m-8 flex justify-center items-center w-[64px] h-[64px] hover:translate-y-2 transition-all duration-300">
					<GaleryItem
						photo={bootstrapLogo.src}
						alt="Bootstrap"
					/>
				</div>
				{/* <GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2022/03/express1.svg"
					alt="Express"
					/>
					<GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2022/03/jquery1.svg"
					alt="jQuery"
				/> */}
				<div className="m-8 flex justify-center items-center w-[64px] hover:translate-y-2 transition-all duration-300">
					<GaleryItem
						photo={sassLogo.src}
						alt="Sass"
					/>
				</div>
				<div className="bg-white rounded-full m-8 flex justify-center items-center w-[64px] h-[64px] hover:translate-y-2 transition-all duration-300">
					<GaleryItem
						photo={webflowLogo.src}
						alt="Webflow"
					/>
				</div>
				<div className="bg-white rounded-full m-8 flex justify-center items-center w-[64px] h-[64px] hover:translate-y-2 transition-all duration-300">
					<GaleryItem
						photo={wordpressLogo.src}
						alt="Wordpress"
					/>
				</div>
				<div className="m-8 flex justify-center items-center w-[64px] h-[64px] hover:translate-y-2 transition-all duration-300">
					<GaleryItem
						photo={shopifyLogo.src}
						alt="Shopify"
					/>
				</div>
				<div className="m-8 flex justify-center items-center w-[52px] h-[52px] hover:translate-y-2 transition-all duration-300">
					<GaleryItem
						photo={figmaLogo.src}
						alt="Figma"
					/>
				</div>
			</div>
			<div className="flex flex-col space-y-5 md:w-[30vw] w-100 text-center md:text-left bg-[rgba(255,255,255,0.1)] p-8 rounded-2xl justify-center h-[360px]">
				<h2 className="text-4xl font-bold md:w-8/12 w-100">
					Technologies
				</h2>
				<p className=" w-100 leading-relaxed md:text-lg text-md font-light md:text-left text-center">
					Several tools were used to accomplish the mission I had.
					With simple steps, clear process, great tools and focus, I
					can create and design ideas, processes, products and
					strategies for your business.
				</p>
				<div className="flex justify-center md:justify-start">
					<Cta
						text="Download my CV"
						link="https://drive.google.com/file/d/1xhxQeVTo0NXgmvb2xrt78qaN2np5d7mi/view?usp=share_link"
					/>
				</div>
			</div>
		</section>
	);
};

export default Technologies;
