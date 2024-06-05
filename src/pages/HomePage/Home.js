import Hero from "../../components/Hero/Hero";
import ShowCase from "../../components/Video/ShowCase";
import About from "../../components/About/About";
import Spotlight from "../../components/Spotlight/Spotlight";
import Social from "../../components/Social/Social";

function HomePage() {
    return(
    <>
    <Hero />
    <ShowCase />
    <About />
    <Spotlight />
    <Social />
    </>
    );
}

export default HomePage;