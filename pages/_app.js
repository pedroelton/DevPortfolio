import '../styles/globals.css'
// import Hero from './components/Hero'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import MyNumbers from './components/MyNumbers'
import Portfolio from './components/Portfolio'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import Footer from './components/Footer'


function MyApp() {
  return (
    <div className="text-slate-900  bg-orange-50">
    {/* <Hero/> */}
    <Navbar/>
    <Header/>
    <Resume/>
    <MyNumbers/>
    <Portfolio/>
    <Technologies/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default MyApp
