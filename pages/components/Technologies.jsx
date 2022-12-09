import React from "react";
import Cta from "./Cta";
import GaleryItem from "./GaleryItem";

const Technologies = () => {
	return (
		<section
			className="flex justify-center align-middle lg:py-24 lg:w-[1400px] m-auto grid-cols-1 lg:grid-cols-2 lg:space-x-16 flex-wrap lg:flex-nowrap p-8 lg:p-0 space-y-12 lg:space-y-0"
			style={{
				backgroundImage:
					'url("https://pedroelton.com/wp-content/uploads/2022/12/bgResume.webp")',
				backgroundRepeat: "no-repeat",
				backgroundSize: "contain",
				backgroundPosition: "center center",
			}}>
			<div className="flex md:w-[30vw] w-100 flex-wrap md:justify-start justify-center">
				<GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2021/12/html-1.svg"
					alt="HTML5"
				/>
				<GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2021/12/css-3.svg"
					alt="CSS3"
				/>
				<GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2022/03/logo-javascript.svg"
					alt="JavaScript"
				/>
				<GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2022/03/react-2.svg"
					alt="React"
				/>
				<GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2022/03/next-js.svg"
					alt="NextJs"
				/>
				<GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2022/03/tailwind-css2.svg"
					alt="Tailwind"
				/>
				<GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2022/09/Bootstrap.svg"
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
					photo="https://pedroelton.com/wp-content/uploads/2022/09/Elementor.svg"
					alt="Elementor"
				/>
				<GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2021/12/icons8-webflow.svg"
					alt="Webflow"
				/>
				<GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2021/12/wordpress-blue.svg"
					alt="Wordpress"
				/>
				<GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2021/12/shopify.svg"
					alt="Shopify"
				/>
				<GaleryItem
					photo="https://pedroelton.com/wp-content/uploads/2021/12/figma-1.svg"
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
						link="https://pedroelton.com/wp-content/uploads/2022/12/CV-Pedro-Elton-Developer-ptbr.pdf"
					/>
				</div>
			</div>
		</section>
	);
};

export default Technologies;
