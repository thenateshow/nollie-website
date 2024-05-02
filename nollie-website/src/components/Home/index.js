import "./index.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import About from "../About";
import Projects from "../Projects";
import Blog from "../Blog";
import Contact from "../Contact";
import img4 from "../../assets/images/fill_image_4.png";
import img6 from "../../assets/images/fill_image_6.png";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArrayFirst = ['N', 'o', 'l', 'l', 'i', 'e', ' ', 'P', 'e', 'r', 'a', 'l', 't', 'a'];
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="home-view" id="homeId">
                <div className="text-zone">
                    <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArrayFirst} idx={15}/>
                    </h1>
                    <div className="row2">
                        <div className="image-left">
                            <img src={img4} alt="4" />
                        </div>
                        <div className="characteristic-list">
                            <h2>Writer</h2>
                            <h2>Singer</h2>
                            <h2>Producer</h2>
                            <h2>Visionary</h2>
                            <h2>New York</h2>
                            <h2>Genre</h2>
                            <h2>Nollie</h2>
                        </div>
                        <div className="image-right">
                            <img src={img6} alt="6" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-view" id="aboutId">
                <About />
            </div>
            <div className="project-view" id="projectsId">
                <Projects />
            </div>
            <div className="blog-view" id="blogId">
                <Blog />
            </div>
            <div className="contact-view" id="contactId">
                <Contact />
            </div>
        </div>
        <Loader type="line-scale" />
        </>
    )
}

export default Home;