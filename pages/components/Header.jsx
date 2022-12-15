import React from "react";
import MockupAnimated from "./Animation";
import Cta from "./Cta";
import bghero from "../../assets/bghero.webp";

function Header() {
	return (
		<section
			className="w-screen h-auto"
			style={{
				backgroundImage: `url(${bghero.src})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "contain",
				backgroundPosition: "center center",
			}}>
			<header className="flex md:flex-nowrap justify-center align-middle md:py-56 lg:py-48 md:-mt-24 lg:w-[1400px] w-100 m-auto">
				<div className="space-y-6 p-4 mt-8 md:w-[60vw] w-full">
					<p className="text-pink-500 text-lg md:text-left text-center">
						Hey, I'm Pedro Elton
					</p>
					<h1 className="md:text-5xl text-3xl font-bold subpixel-antialiased text-center md:text-left">
						Front-end Developer <br /> & UI/UX Designer
					</h1>
					<p className=" md:w-[480px] leading-relaxed text-lg font-light text-center md:text-left">
						My experience in the past 3 years were focused on web
						design and UI/UX Design. As a front-end web developer
						I’m an Entry-level/Junior on ReactJs, JavaScript,
						jQuery, NodeJs and Express.
					</p>
					<div className="w-full flex flex-col lg:flex-row lg:space-y-0 space-y-4 justify-center md:justify-start items-center">
						<Cta
							text="Download my CV"
							link="https://drive.google.com/file/d/1rG3FC86osIgaF2T7OERpiPElY_tEHGRO/view?usp=sharing"
						/>
						<a
							href="#contact"
							className="">
							<button className="px-20 my-8 md:my-0 underline underline-offset-2 text-lg font-bold hover:text-indigo-500 transition-all duration-300">
								Contact me
							</button>
						</a>
					</div>
					<div className="md:w-[480px] w-100">
						<h4 className="md:mt-24 mt-16 font-bold  mb-4">
							Review:
						</h4>
						<q className="leading-relaxed ">
							Pedro is one of the most incredible guys I ever met,
							as a person I have no word to describe him, as a
							professional, the best word to describe Pedro is
							commitment. His commitment to accomplish tasks and
							his strength to develop new skills are speechless
						</q>
						<br />
						<cite>
							{" "}
							-{" "}
							<span className="font-bold cursor-pointer ">
								Warley Godoi
							</span>
							, Hedge fund manager - Cascais, Portugal.
						</cite>
					</div>
				</div>
				{/* <div className="md:w-[100%] w-100 hidden md:inline">
                <iframe
                    src="https://my.spline.design/untitled-959027861bb08831444051746de775c7/"
                    frameborder="0"
                    width="100%"
                    height="100%"
                    className="-mt-32"
                ></iframe> */}
				<div className="md:w-[60vw] w-100 hidden md:inline">
					{" "}
					<MockupAnimated />
				</div>
			</header>
		</section>
	);
}

export default Header;
