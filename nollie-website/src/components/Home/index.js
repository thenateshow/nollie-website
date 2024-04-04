import "./index.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from './Logo';
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['n', 'o', 'l', 'l', 'i', 'e', ' ', 'p', 'e', 'r', 'a', 'l', 't', 'a', '.'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                </h1>
                <h2>Writer / Singer / Producer / Visionary</h2>
                <Link to="/contact" className='flat-button'>Contact Me.</Link>
            </div>
            <Logo></Logo>
        </div>
        <Loader type="line-scale" />
        </>
    )
}

export default Home;