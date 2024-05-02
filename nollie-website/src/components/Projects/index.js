import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import audio_euphoria from '../../assets/audio/euphoria.mp3';
import audio_push_ups from '../../assets/audio/push_ups.mp3';
import audio_7_minute_drill from '../../assets/audio/7_minute_drill.mp3';

const Projects = () => {
    
    const title = "Music."
    const titleArray = Array.from({length: title.length}, (_, i) => title[i])

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(audio_euphoria);
    const audioElem = useRef();

    useEffect(() => {
        if (isPlaying) {
            audioElem.current.play();
        }
        else {
            audioElem.current.pause();
        }
    }, [isPlaying])

    const PlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    const changeSong = (newSong) => {
        async function changeNewSong() {
            setCurrentSong(newSong)
            audioElem.current.currentTime = 0;
            await setIsPlaying(true);
            audioElem.current.play();
        }
        changeNewSong();
    }

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    
    return (
        <>
        <div className='container projects-page'>
            <audio src={currentSong} ref={audioElem} />
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={15} />
                </h1>
                <div className='scroll project-list'>
                    <div className='playbar-header'>
                        <div className='music-play-button'>
                            <button onClick={PlayPause}>
                                {isPlaying ? <FontAwesomeIcon icon={faPause} color="#FF9966" /> : <FontAwesomeIcon icon={faPlay} color="#FF9966" />}
                            </button>
                        </div>
                    </div>
                    <div className='song-list'>
                        <div className='song'>
                            <div className='main-info'>
                                <div className='title'><input type='button' value="Euphoria" onClick={() => changeSong(audio_euphoria)}/></div>
                                <div className='artist'><p>Kendrick Lamar</p></div>
                                <div className='album'><p>Euphoria</p></div>
                                <div className='see-more'><input type='button' value="Learn More" onClick={() => setShow1(!show1)}/></div>
                            </div>
                            {show1 && <div className='additional-info add-1'>
                                <div className='entry1'>
                                    <p>text for entry 1</p>
                                </div>
                                <div className='entry2'>
                                    <p>text for entry 2</p>
                                </div>
                                <div className='entry3'>
                                    <p>text for entry 3</p>
                                </div>
                                <div className='entry4'>
                                    <p>text for entry 4</p>
                                </div>
                                <div className='entry5'>
                                    <p>text for entry 5</p>
                                </div>
                                <div className='entry6'>
                                    <p>text for entry 6</p>
                                </div>
                            </div> }
                        </div>
                        <div className='song'>
                            <div className='main-info'>
                                <div className='title'><input type='button' value="Push Ups" onClick={() => changeSong(audio_push_ups)}/></div>
                                <div className='artist'><p>Drake</p></div>
                                <div className='album'><p>Push Ups</p></div>
                                <div className='see-more'><input type='button' value="Learn More" onClick={() => setShow2(!show2)}/></div>
                            </div>
                            {show2 && <div className='additional-info'>
                                <p>textextextextextextextext</p>
                            </div> }
                        </div>
                        <div className='song'>
                            <div className='main-info'>
                                <div className='title'><input type='button' value="7 Minute Drill" onClick={() => changeSong(audio_7_minute_drill)}/></div>
                                <div className='artist'><p>J. Cole</p></div>
                                <div className='album'><p>7 Minute Drill</p></div>
                                <div className='see-more'><input type='button' value="Learn More" onClick={() => setShow3(!show3)}/></div>
                            </div>
                            {show3 && <div className='additional-info'>
                                <p>textextextextextextextext</p>
                            </div> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='line-scale' />
        </>
    )
}

export default Projects