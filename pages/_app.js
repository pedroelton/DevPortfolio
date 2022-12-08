import "../styles/globals.css";
// import Hero from './components/Hero'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import MyNumbers from "./components/MyNumbers";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {createContext, useState} from "react";
import Brightness6Icon from "@mui/icons-material/Brightness6";

export const ThemeContext = createContext(null);

function MyApp() {
	const [theme, setTheme] = useState(
		"bg-slate-900  text-orange-50 overflow-hidden"
	);
	const toggleTheme = () => {
		setTheme((curr) =>
			curr === "bg-slate-900  text-orange-50 overflow-hidden"
				? "text-slate-800  bg-orange-50 overflow-hidden"
				: "bg-slate-900  text-orange-50 overflow-hidden"
		);
	};
	return (
		<ThemeContext.Provider value={(theme, toggleTheme)}>
			<div className={theme}>
				{/* <Hero/> */}
				<Navbar toggle={toggleTheme} />
				<Header />
				<Resume />
				<MyNumbers />
				<Portfolio />
				<Technologies />
				<Contact />
				<Footer />
			</div>
		</ThemeContext.Provider>
	);
}

export default MyApp;
