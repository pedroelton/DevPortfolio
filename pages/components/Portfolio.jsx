/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CardProject from "./CardProject";
import CtaNewWindow from "./CtaNewWindow";
import bgPortfolio from "../../assets/bghero.webp";
import amazonImage from "../../assets/amazon.webp";
import instagramImage from "../../assets/instagram.webp";
import cryptoImage from "../../assets/Frame-1card-2.webp";
import noahImage from "../../assets/Screenshot-at-Mar-31-23-53-13.webp";
import taskImage from "../../assets/Screenshot-at-Apr-01-00-01-40.webp";
import designCodeImage from "../../assets/Screenshot-at-Apr-28-13-57-28.png";
import microblogImage from "../../assets/microblog-min.png";
import phpCrudImage from "../../assets/phpcrud-min.png";
import weightTrackerImage from "../../assets/weighttracker-min.png";
import dektosMockup from "../../assets/Web-Moock-Up-min-scaled.webp";

const Portfolio = () => {
	return (
		<section
			id="portfolio"
			className="flex flex-col justify-center space-y-12"
			style={{
				backgroundImage: `url(${bgPortfolio.src})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "contain",
				backgroundPosition: "center center",
			}}>
			<div className="flex justify-evenly align-middle lg:py-24 lg:w-[1400px] m-auto grid-cols-1 lg:grid-cols-2 flex-wrap p-8 lg:p-0 space-y-12 lg:space-y-0">
				<div className="w-full flex flex-col justify-center">
					<h2 className="text-4xl font-bold w-full text-center pb-2 items-center">
						Projects
					</h2>
					{/* <p className="text-sm font-medium text-center pb-8">
						Every month I am adding new projects here
					</p> */}
				</div>
				<CardProject
					image={amazonImage.src}
					title="Amazon frontend UI Clone"
					description="A simple project made using ReactJs, NextJs, Netlify and Tailwind. The products were fetched from the FakeStore api."
					link="https://amazon-clone-react-nextjs-frontend-project.vercel.app/"
					repo="https://github.com/pedroelton/Amazon-Clone-React-Nextjs-Frontend-Project"
				/>
				<CardProject
					image={instagramImage.src}
					title="Instagram mobile frontend UI Clone"
					description="This frontend project is the Instagram UI made in React Native and Expo. This is the first part of the Instagram Clone project."
					link="https://github.com/pedroelton/Instagram-clone-React-Native"
					repo="https://github.com/pedroelton/Instagram-clone-React-Native"
				/>
				<CardProject
					image={cryptoImage.src}
					title="Crypto Info"
					description="Cryptocurrency price and information tracker. Made in ReactJs and using the Coinstats api. Other features will be implemented soon."
					link="https://thecryptoinfo.vercel.app/"
					repo="https://github.com/pedroelton/CryptoInfo"
				/>
				<CardProject
					image={noahImage.src}
					title="Noah Weather"
					description="App made in EJS, Nodejs and Express that fetchs an weather API and give important weather information from my City."
					link="https://github.com/pedroelton/NoahWeather.git"
					repo="https://github.com/pedroelton/NoahWeather.git"
				/>
				<CardProject
					image={taskImage.src}
					title="MyTask"
					description="The first project I did. I used jQuery to build an pretty Todo list called MyTask. It a simple list, without backend."
					link="https://ephemeral-chimera-ed1aea.netlify.app/"
					repo="https://github.com/pedroelton/Simple-Todo-List-in-jQuery"
				/>
				<CardProject
					image={designCodeImage.src}
					title="Designcode.io Clone"
					description="A great project to practice Styled Components and ReactJs, as part of the designcode.io React course."
					link="https://designcode-frontend-clone.netlify.app/"
					repo="https://github.com/pedroelton/designcode.io_clone.git"
				/>
				<CardProject
					image={microblogImage.src}
					title="Microblog"
					description="A Microblog project made with HTML, CSS, Python Flask and MongoDB."
					link="https://microblog-pedro.onrender.com/"
					repo="https://github.com/pedroelton/microblog-pedro.git"
				/>
				<CardProject
					image={phpCrudImage.src}
					title="Simple CRUD in PHP and MYSQL"
					description="A project made for training purposes. HTML, Bootstrap, PHP and MySQL"
					link="https://github.com/pedroelton/SIMPLE-CRUD-PHP-MYSQL"
					repo="https://github.com/pedroelton/SIMPLE-CRUD-PHP-MYSQL.git"
				/>
				<CardProject
					image={weightTrackerImage.src}
					title="Weight Tracker in VueJs"
					description="A weight tracker using Vue Js, ChartJs, CSS and Vite"
					link="https://github.com/pedroelton/weight-tracker-vue"
					repo="https://github.com/pedroelton/weight-tracker-vue.git"
				/>
			</div>
			<div className="flex justify-center align-middle lg:py-24 lg:w-[1400px] m-auto grid-cols-1 lg:grid-cols-2 lg:space-x-16 flex-wrap lg:flex-nowrap p-8 lg:p-0 space-y-12 lg:space-y-0">
				<div className="flex flex-col space-y-5 md:w-[50vw] w-100 bg-[rgba(255,255,255,0.1)] p-8 rounded-2xl">
					<h2 className="text-4xl font-bold md:w-8/12 w-100">
						Dektos{" "}
						<span className="text-lg font-medium">
							(UI/UX, Web Design and auditing)
						</span>
					</h2>
					<p className="md:w-12/12 w-100 leading-relaxed md:text-lg text-md font-light text-left">
						Here I'm showing the last project I worked on in 2021. I
						would love to talk more about it and about other
						projects in a interview.
					</p>
					<p className=" md:w-12/12 w-100 leading-relaxed md:text-lg text-md font-light text-left">
						Dektos was a social media focused on finance and trading
						called Dektos and had the mission to reduce the barriers
						and the spread of knowledge between institutional
						investors and small investors, retail traders or people
						without any level of knowledge in investments.
					</p>
					<p className=" md:w-12/12 w-100 leading-relaxed md:text-lg text-md font-light text-left">
						The project had over 200 screens designed with exclusive
						functionalities and processes created by me. My main
						role in this project was to create from scratch the
						business model, features and, design, to manage the
						development team, and audit their deliveries.
					</p>
					<CtaNewWindow
						text="Case studies"
						link="https://pedroelton.com/case-studies/"
					/>
				</div>
				<div className="flex flex-col space-y-5 md:w-[50vw] w-100">
					<img
						src={dektosMockup.src}
						alt="3 designs made on figma"
						className="hover:-rotate-6 hover:scale-110 transition-all duration-300"
						
					/>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
