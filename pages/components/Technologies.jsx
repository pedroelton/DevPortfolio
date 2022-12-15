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
import elementorLogo from "../../assets/Elementor.svg";
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
				<GaleryItem
					photo={htmlLogo.src}
					alt="HTML5"
				/>
				<GaleryItem
					photo={cssLogo.src}
					alt="CSS3"
				/>
				<GaleryItem
					photo={javaScriptLogo.src}
					alt="JavaScript"
				/>
				<GaleryItem
					photo={reactLogo.src}
					alt="React"
				/>
				<GaleryItem
					photo={nextLogo.src}
					alt="NextJs"
				/>
				<GaleryItem
					photo={tailwindLogo.src}
					alt="Tailwind"
				/>
				<GaleryItem
					photo={bootstrapLogo.src}
					alt="Bootstrap"
				/>
				{/* <GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2022/03/express1.svg"
					alt="Express"
					/>
					<GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2022/03/jquery1.svg"
					alt="jQuery"
				/> */}
				<GaleryItem
					photo={elementorLogo.src}
					alt="Elementor"
				/>
				<GaleryItem
					photo={webflowLogo.src}
					alt="Webflow"
				/>
				<GaleryItem
					photo={wordpressLogo.src}
					alt="Wordpress"
				/>
				<GaleryItem
					photo={shopifyLogo.src}
					alt="Shopify"
				/>
				<GaleryItem
					photo={figmaLogo.src}
					alt="Figma"
				/>
			</div>
			<div className="flex flex-col space-y-5 md:w-[30vw] w-100 text-center md:text-left bg-[rgba(255,255,255,0.1)] p-8 rounded-2xl justify-center">
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
						link="https://drive.google.com/file/d/1rG3FC86osIgaF2T7OERpiPElY_tEHGRO/view?usp=sharing"
					/>
				</div>
			</div>
		</section>
	);
};

export default Technologies;
