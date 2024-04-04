import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

const About = () => {

    const title = "About Me."
    const titleArray = Array.from({length: title.length}, (_, i) => title[i])

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={titleArray}
                    idx={15}
                />
                </h1>
                <p>My biography.</p>
            </div>

        </div>
        <Loader type="line-scale" />
        </>
    )
}

export default About;