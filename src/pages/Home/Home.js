import Hero from "../../components/Hero/Hero";
import ShowCase from "../../components/Video/ShowCase";
import About from "../../components/About/About";
import Spotlight from "../../components/Spotlight/Spotlight";
import Footer from "../../components/Footer/Footer";


function HomePage() {
    return(
    <>
    <Hero />
    <ShowCase />
    <About />
    <Spotlight />
    </>
    );
}

export default HomePage;