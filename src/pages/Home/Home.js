import Hero from "../../components/Hero/Hero";
import ShowCase from "../../components/Video/ShowCase";
import About from "../../components/About/About";
import Spotlight from "../../components/Spotlight/Spotlight";
import Contact from "../../components/Contact/Contact";

function HomePage() {
    return(
    <>
    <Hero />
    <ShowCase />
    <About />
    <Spotlight />
    <Contact />
    </>
    );
}

export default HomePage;