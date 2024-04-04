import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Projects = () => {
    
    const title = "Projects."
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
                    <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={15} />
                </h1>
                <p>
                    Some of my best work.
                </p>
                <hr className='main-break'></hr>
                <div className='scroll project-list'>
                    <div className='project-desc project1'>
                        <a href='https://github.com/' target="_blank" rel="noopener noreferrer"><h2><b><u>A Project</u></b></h2></a>
                        <h4>Talent</h4>
                        <p>A work of art.</p>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
        <Loader type='line-scale' />
        </>
    )
}

export default Projects