import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Projects = () => {
    
    const title = "Blog."
    const titleArray = Array.from({length: title.length}, (_, i) => title[i])

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    
    return (
        <>
        <div className='container projects-page'>
            <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={15}/>
            </h1>
            <p>Here is my blog.</p>
            </div>
        </div>
        <Loader type='line-scale' />
        </>
    )
}

export default Projects