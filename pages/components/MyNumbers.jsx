import React, { Suspense } from "react";
import CountUp from 'react-countup';


const MyNumbers = () => {
  return (
    <section className="w-full flex flex-grow lg:py-16 py-8 flex-col md:flex-row" style={{backgroundImage: 'url("https://pedroelton.com/wp-content/uploads/2022/01/Artboard-1-copy-3-min-scaled.webp")', backgroundRepeat:'no-repeat', backgroundSize:"cover", backgroundPosition:"fixed"}}>
      <div className="lg:w-[1400px] w-full m-auto grid-cols-1 lg:grid-cols-2 flex flex-col lg:flex-row justify-center flex-wrap md:flex-nowrap lg:space-x-16 items-center">
        <div className="space-y-4 p-4 lg:p-0">
          <h2 className="text-4xl font-bold lg:w-8/12 w-100 text-white text-center lg:text-left">My numbers in 2021</h2>
          {/* <div className="h-2 bg-indigo-600 w-24"/> */}
          <p className="md:w-[540px] leading-relaxed md:text-lg text-md font-light text-center lg:text-left text-orange-200">Considering only web design, UI & UX design. I am not considering development due to the projects were for learning purpose.</p>
      </div>
        <div className="flex flex-col w-full justify-center items-center md:flex-row lg:space-x-8 space-y-4 md:space-y-0 mt-8 flex-wrap lg:flex-nowrap">
          <div className="flex flex-col text-center items-center justify-center md:p-8 my-aut">
            <CountUp duration ={5} end={287} className="font-extrabold text-5xl mb-2 text-white"/>
            <p className="text-lg text-orange-200">Screens designed in 2021</p>
          </div>
          <div className="flex flex-col text-center items-center justify-center md:p-8 my-auto">
            <CountUp duration ={5} end={5} className="font-extrabold text-5xl mb-2 text-white"/>
            <p className="text-lg text-orange-200">Websites done in 2021</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default MyNumbers