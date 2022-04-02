import React from 'react'
import CardProject from './CardProject'

const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col justify-center space-y-12 mt-12">
        <div className="flex justify-evenly align-middle lg:py-24 lg:w-[1400px] m-auto grid-cols-1 lg:grid-cols-2 flex-wrap p-8 lg:p-0 space-y-12 lg:space-y-0 rounded-lg border-2 border-orange-100">
          <div className="w-full flex flex-col justify-center">
          <h2 className="text-4xl font-bold w-full text-center pb-2 items-center">Projects</h2>
          <p className="text-sm font-medium text-center pb-8">Every week I'm adding new projects here</p>
          </div>
          <CardProject
            image="https://pbs.twimg.com/profile_images/1400483947319115776/bTfxhuOK_400x400.jpg"
            title="Amazon front-end UI Clone"
            description="A simple project made using ReactJs, NextJs, Netlify and Tailwind. The products were fetched from the FakeStore api."
            link="https://amazon-clone-react-nextjs-frontend-project.vercel.app/"
            repo="https://github.com/pedroelton/Amazon-Clone-React-Nextjs-Frontend-Project"
            />
          <CardProject
            image="https://pedroelton.com/wp-content/uploads/2022/03/Screenshot-at-Mar-31-23-53-13.png"
            title="Noah Weather"
            description="App made in EJS, Nodejs and Express that fetchs an weather API and give important weather information from my City."
            link="https://github.com/pedroelton/NoahWeather.git"
            repo="https://github.com/pedroelton/NoahWeather.git"
            />
          <CardProject
            image="https://pedroelton.com/wp-content/uploads/2022/03/Screenshot-at-Apr-01-00-01-40.png"
            title="MyTask"
            description="The first project I did. I used jQuery to build an pretty Todo list called MyTask. It a simple list, without backend."
            link="https://ephemeral-chimera-ed1aea.netlify.app/"
            repo="https://github.com/pedroelton/Simple-Todo-List-in-jQuery"
            />
{/* //Todo: Add 3 projects this week */ }
      </div>
      <div className="flex justify-center align-middle lg:py-24 lg:w-[1400px] m-auto grid-cols-1 lg:grid-cols-2 lg:space-x-16 flex-wrap lg:flex-nowrap p-8 lg:p-0 space-y-12 lg:space-y-0">
        <div className="flex flex-col space-y-5 md:w-[50vw] w-100 border-2 border-orange-100 p-8 rounded-2xl">
          <h2 className="text-4xl font-bold md:w-8/12 w-100">Dektos <span className="text-lg font-medium">(UI/UX, Web Design and auditing)</span></h2>
          <p className="text-zinc-600 md:w-12/12 w-100 leading-relaxed md:text-lg text-md font-light text-left">
            Here I’m showing the last project I worked on in 2021. I would love to talk more about it and about other projects in a interview.
          </p>
          <p className="text-zinc-600 md:w-12/12 w-100 leading-relaxed md:text-lg text-md font-light text-left">
            This project was a social media focused on finance and trading called Dektos and had the mission to reduce the barriers and the spread of knowledge between institutional investors and small investors, retail traders or people without any level of knowledge in investments. 
          </p>
          <p className="text-zinc-600 md:w-12/12 w-100 leading-relaxed md:text-lg text-md font-light text-left">
            The project had over 200 screens designed with exclusive functionalities and processes created by me. My main role in this project was to create from scratch the business model, features and, design, to manage the development team, and audit their deliveries.</p>
        </div>
        <div className="flex flex-col space-y-5 md:w-[50vw] w-100">
          <img src="https://pedroelton.com/wp-content/uploads/2021/12/Web-Moock-Up-min-scaled.webp" alt="3 designs made on figma" className="hover:-rotate-6 hover:scale-110 transition-all duration-300" />
        </div>
      </div>
    </section>
  )
}

export default Portfolio