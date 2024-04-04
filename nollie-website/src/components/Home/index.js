import "./index.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import Rockstar from '../../assets/images/rockstar.webp'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArrayFirst = ['N', 'o', 'l', 'l', 'i', 'e'];
    const nameArraySecond = ['P', 'e', 'r', 'a', 'l', 't', 'a']

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
                <AnimatedLetters letterClass={letterClass} strArray={nameArrayFirst} idx={15}/>
                </h1>
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={nameArraySecond} idx={15}/>
                </h1>
                <h2>Writer</h2>
                <h2>Singer</h2>
                <h2>Producer</h2>
                <h2>Visionary</h2>
                <Link to="/contact" className='flat-button'>Contact Me.</Link>
            </div>
            <div className="img-zone">
                <img src={Rockstar} alt="rockstar" />
            </div>
        </div>
        <Loader type="line-scale" />
        </>
    )
}

export default Home;