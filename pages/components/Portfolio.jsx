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
import diceImage from "../../assets/dice.webp";

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
					<h2 className="text-4xl font-bold w-full text-center mb-8 items-center">
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
					badgeContent="ReactJs"
					badgeColor="info"
					
					/>
				<CardProject
					image={instagramImage.src}
					title="Instagram mobile frontend UI Clone"
					description="This frontend project is the Instagram UI made in React Native and Expo. This is the first part of the Instagram Clone project."
					link="https://github.com/pedroelton/Instagram-clone-React-Native"
					repo="https://github.com/pedroelton/Instagram-clone-React-Native"
					badgeContent="ReactNative"
					badgeColor="info"
					/>
				<CardProject
					image={cryptoImage.src}
					title="Crypto Info"
					description="Cryptocurrency price and information tracker. Made in ReactJs and using the Coinstats api. Other features will be implemented soon."
					link="https://thecryptoinfo.vercel.app/"
					repo="https://github.com/pedroelton/CryptoInfo"
					badgeContent="ReactJs"
					badgeColor="info"
					/>
				<CardProject
					image={microblogImage.src}
					title="Microblog"
					description="A Microblog project made with HTML, CSS, Python Flask and MongoDB."
					link="https://microblog-pedro.onrender.com/"
					repo="https://github.com/pedroelton/microblog-pedro.git"
					badgeContent="Flask"
					badgeColor="success"
					/>
				<CardProject
					image={diceImage.src}
					title="Dispute Solver: The Game"
					description="A game to help you solve your daily domestic disputes. I used HTMl, CSS, and vanila JS. I also did it in React Native. Click to play!"
					link="https://dispute-solver.netlify.app/"
					repo="https://github.com/pedroelton/Dispute-solver-dice-game"
					badgeContent="JavaScript"
					badgeColor="warning"
					/>
				<CardProject
					image={taskImage.src}
					title="MyTask"
					description="The first project I did. I used jQuery to build an pretty Todo list called MyTask. It a simple list, without backend."
					link="https://ephemeral-chimera-ed1aea.netlify.app/"
					repo="https://github.com/pedroelton/Simple-Todo-List-in-jQuery"
					badgeContent="JQuery"
					badgeColor="failure"
					/>
				<CardProject
					image={weightTrackerImage.src}
					title="Weight Tracker in VueJs"
					description="A weight tracker using Vue Js, ChartJs, CSS and Vite"
					link="https://github.com/pedroelton/weight-tracker-vue"
					repo="https://github.com/pedroelton/weight-tracker-vue.git"
					badgeContent="VUEJs"
					badgeColor="success"
					/>
				<CardProject
					image={phpCrudImage.src}
					title="Simple CRUD in PHP and MYSQL"
					description="A project made for training purposes. HTML, Bootstrap, PHP and MySQL"
					link="https://github.com/pedroelton/SIMPLE-CRUD-PHP-MYSQL"
					repo="https://github.com/pedroelton/SIMPLE-CRUD-PHP-MYSQL.git"
					badgeContent="PHP"
					badgeColor="failure"
					/>
				<CardProject
					image={designCodeImage.src}
					title="Designcode.io Clone"
					description="A great project to practice Styled Components and ReactJs, as part of the designcode.io React course."
					link="https://designcode-frontend-clone.netlify.app/"
					repo="https://github.com/pedroelton/designcode.io_clone.git"
					badgeContent="ReactJs"
					badgeColor="info"
					/>
				<CardProject
					image={noahImage.src}
					title="Noah Weather"
					description="App made in EJS, Nodejs and Express that fetchs an weather API and give important weather information from my City."
					link="https://github.com/pedroelton/NoahWeather.git"
					repo="https://github.com/pedroelton/NoahWeather.git"
					badgeContent="EJS"
					badgeColor="warning"
					/>
			</div>
			<div className="flex justify-center align-middle lg:py-24 lg:w-[1400px] m-auto grid-cols-1 lg:grid-cols-2 lg:space-x-16 flex-wrap lg:flex-nowrap p-8 lg:p-0 space-y-12 lg:space-y-0">
				<div className="flex flex-col space-y-5 md:w-auto w-auto bg-[rgba(255,255,255,0.1)] p-8 rounded-2xl">
					<h2 className="text-4xl font-bold md:w-8/12 w-100">
						Dektos{" "}
						<span className="text-lg font-medium">
							(UI/UX, Web Design and auditing)
						</span>
					</h2>
					<p className="md:w-12/12 w-[40ch] leading-relaxed md:text-lg text-md font-light text-left">
					Dektos was a social media platform for finance and trading with a mission to bridge the gap between institutional and retail investors by spreading knowledge. I was responsible for creating the business model, features, and design from scratch, as well as managing the development team and auditing their work. I designed over 200 screens, each with unique functionalities. <br /><br />Let's chat more about this and my other projects during an interview.
					</p>

					<CtaNewWindow
						text="Case studies"
						link="https://pedroelton.com/dektos-case-studies/"
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
