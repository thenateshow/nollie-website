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
    
    return (
        <>
        <div className='container projects-page'>
            <audio src={currentSong} ref={audioElem} />
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={15} />
                </h1>
                <div className='scroll project-list'>
                    <div className='left-list'>
                        <div className='music-header'>
                            <div className='music-play-button'>
                                <button onClick={PlayPause}>
                                    {isPlaying ? <FontAwesomeIcon icon={faPause} color="#FF9966" /> : <FontAwesomeIcon icon={faPlay} color="#FF9966" />}
                                </button>
                            </div>
                        </div>
                        <div className='music-list'>
                            <div className='music-x music-1'>
                                <div className='music-title'>
                                    <input type='button' value="Euphoria" onClick={() => changeSong(audio_euphoria)}/>
                                </div>
                                <div className='music-artists'>
                                    <p>Kendrick Lamar</p>
                                </div>
                                <div className='music-length'>
                                    <p>6:23</p>
                                </div>
                            </div>
                            <div className='music-x music-2'>
                                <div className='music-title'>
                                    <input type='button' value="Push Ups" onClick={() => changeSong(audio_push_ups)}/>
                                </div>
                                <div className='music-artists'>
                                    <p>Drake</p>
                                </div>
                                <div className='music-length'>
                                    <p>3:52</p>
                                </div>
                            </div>
                            <div className='music-x music-3'>
                                <div className='music-title'>
                                    <input type='button' value="7 Minute Drill" onClick={() => changeSong(audio_7_minute_drill)}/>
                                </div>
                                <div className='music-artists'>
                                    <p>J. Cole</p>
                                </div>
                                <div className='music-length'>
                                    <p>3:32</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lyrics'>
                        <p>[Part I]<br/><br/>[Intro]<br/>​eurt si em tuoba yas yeht gnihtyrevE<br/>Euphoria<br/><br/>[Verse]<br/>Them super powers gettin' neutralized, I can only watch in silence<br/>The famous actor we once knew is lookin' paranoid and now is spiralin'<br/>You're movin' just like a degenerate, every antic is feelin' distasteful<br/>I calculate you're not as calculated, I can even predict your angle<br/>Fabricatin' stories on the family front 'cause you heard Mr. Morale<br/>A pathetic master manipulator, I can smell the tales on you now<br/>You'rе not a rap artist, you a scam artist with the hopes of being accеpted<br/>Tommy Hilfiger stood out, but FUBU never had been your collection<br/>I make music that electrify 'em, you make music that pacify 'em<br/>I can double down on that line, but spare you this time, that's random acts of kindness<br/>Know you a master manipulator and habitual liar too<br/>But don't tell no lie about me and I won't tell truths 'bout you<br/><br/>[Part II]<br/><br/>[Intro]<br/>Shoo, shoo, shoo<br/>Shoo, shoo, shoo<br/>Bee, bee, bee, bee, bee, bee<br/>You might also like<br/>Push Ups<br/>Drake<br/>Taylor Made Freestyle<br/>Drake<br/>Like That<br/>Future, Metro Boomin & Kendrick Lamar<br/>[Verse 1]<br/>Yeah, I'm out the way, yeah, I'm low, okay<br/>Yeah, the island right here's remote, okay<br/>I ain't thinkin' about no reaper<br/>Nigga, I'm reapin' what I sow, okay<br/>Got a Benjamin and a Jackson all in my house like I'm Joe, okay<br/>Hellcat, made his homeboys and them type sell they soul, okay<br/>Everybody wanna be demon 'til they get chipped by your throwaway<br/>And I might do a show a day, once a lame, always a lame<br/>Oh, you thought the money, the power or fame would make you go away?<br/>Have you ever played have-you-ever? Okay, nigga, let's play<br/>Have you ever walked your enemy down like with a poker face?<br/>Have you ever paid five hundred thou' like to an open case?<br/>Well, I have, and I failed at both, but I came out straight<br/>I hate when a rapper talk about guns, then somebody die<br/>They turn into nuns, then hop online, like "Pray for my city"<br/>He fakin' for likes and digital hugs<br/>His daddy a killer, he wanna be junior, they must've forgot the shit that they done<br/>Dementia must run in his family, but let it get shaky<br/>I'll park his son<br/>The very first time I shot me a Drac', the homie had told me to aim it this way<br/>I didn't point down enough, today, I'll show you I learned from those mistakes<br/>Somebody had told me that you got a ring, on God, I'm ready to double the wage<br/>I'd rather do that than let a Canadian nigga make Pac turn in his grave<br/>Cutthroat business, you got shit twisted<br/>What is it? The braids?<br/>I hurt your feelings? You don't wanna work with me no more? Okay<br/>It's three G.O.A.T.s left, and I seen two of them kissin' and huggin' on stage<br/>I love 'em to death, and in eight bars, I'll explain that phrase, huh<br/>It's nothin' nobody can tell me, huh<br/>I don't wanna talk on no celly, huh<br/>You know I got language barriers, huh<br/>It's no accent you can sell me, huh<br/>Yeah, Cole and Aubrey know I'm a selfish nigga<br/>The crown is heavy, huh<br/>I pray they my real friends, if not, I'm YNW Melly<br/>I don't like you poppin' shit at Pharrell, for him, I inherit the beef<br/>Yeah, fuck all that pushin' P, let me see you push a T<br/>You better off spinnin' again on him, you think about pushin' me<br/>He's Terrence Thornton, I'm Terence Crawford, yeah, I'm whoopin' feet<br/>We ain't gotta get personal, this a friendly fade, you should keep it that way<br/>I know some shit about niggas that make Gunna Wunna look like a saint<br/>This ain't been about critics, not about gimmicks, not about who the greatest<br/>It's always been about love and hate, now let me say I'm the biggest hater<br/>I hate the way that you walk, the way that you talk, I hate the way that you dress<br/>I hate the way that you sneak diss, if I catch flight, it's gon' be direct<br/>We hate the bitches you fuck, 'cause they confuse themself with real women<br/>And notice, I said "we," it's not just me, I'm what the culture feelin'<br/>How many more fairytale stories 'bout your life 'til we had enough?<br/>How many more Black features 'til you finally feel that you're Black enough?<br/>I like Drake with the melodies, I don't like Drake when he act tough<br/>You gon' make a nigga bring back Puff, let me see if Chubbs really crash somethin'<br/>Yeah, my first one like my last one, it's a classic, you don't have one<br/>Let your core audience stomach that, then tell 'em where you get your abs from<br/>V12, it's a fast one, baow-baow-baow, last one<br/>Headshot for the year, you better walk around like Daft Punk<br/>[Verse 2]<br/>Remember?<br/>Ayy, Top Dawg, who the fuck they think they playin' with?<br/>Extortion my middle name as soon as you jump off of that plane, bitch<br/>I'm allergic to the lame shit, only you like bein' famous<br/>Yachty can't give you no swag neither, I don't give a fuck 'bout who you hang with<br/>I hate the way that you walk, the way that you talk, I hate the way that you dress<br/>Surprised you wanted that feature request<br/>You know that we got some shit to address<br/>I even hate when you say the word "nigga," but that's just me, I guess<br/>Some shit just cringeworthy, it ain't even gotta be deep, I guess<br/>Still love when you see success, everything with me is blessed<br/>Keep makin' me dance, wavin' my hand, and it won't be no threat<br/>I'm knowin' they call you The Boy, but where is a man? 'Cause I ain't seen him yet<br/>Matter fact, I ain't even bleed him yet, can I bleed him? Bet<br/>When I see you stand by Sexyy Red, I believe you see two bad bitches<br/>I believe you don't like women, it's real competition, you might pop ass with 'em<br/>Let's speak on percentage, show me your splits, I'll make sure I double back with you<br/>You were signed to a nigga that's signed to a nigga that said he was signed to that nigga<br/>Try cease and desist on the "Like That" record?<br/>Ho, what? You ain't like that record?<br/>"Back To Back," I like that record<br/>I'ma get back to that, for the record<br/>Why would I call around tryna get dirt on niggas? Y'all think all my life is rap?<br/>That's ho shit, I got a son to raise, but I can see you don't know nothin' 'bout that<br/>Wakin' him up, know nothin' 'bout that<br/>Then tell him to pray, know nothin' 'bout that<br/>Then givin' him tools to walk through life like day by day, know nothin' 'bout that<br/>Teachin' him morals, integrity, discipline, listen, man, you don't know nothin' 'bout that<br/>Speakin' the truth and consider what God's considerin', you don't know nothin' 'bout that<br/>Ain't twenty-v-one, it's one-v-twenty if I gotta smack niggas that write with you<br/>Yeah, bring 'em out too, I'll clean 'em out too<br/>Tell BEAM that he better stay right with you<br/>Am I battlin' ghost or AI? Nigga feelin' like Joel Osteen<br/>Funny, he was in a film called "AI"<br/>And my sixth sense tellin' me to off him<br/>I'ma blick niggas all in they coffin<br/>Yeah, OV-ho niggas is dick riders<br/>Tell 'em run to America, they imitate heritage, they can't imitate this violence<br/>What I learned is niggas don't like the West Coast<br/>And I'm fine with it, I'll push the line with it<br/>Pick a nigga off one at a time with it<br/>We can be on a three-hour time difference<br/>Don't speak on the family, crodie<br/>It can get deep in the family, crodie<br/>Talk about me and my family, crodie?<br/>Someone gon' bleed in your family, crodie<br/>I be at New Ho King eatin' fried rice with a dip sauce and a blammy, crodie<br/>Tell me you're cheesin', fam<br/>We can do this right now on the camera, crodie<br/>Ayy, fuck y'all niggas, I don't trust y'all niggas<br/>I wave one finger and thump y'all niggas like mmm<br/>Field goal, punt y'all niggas, they punk y'all niggas, nobody never took my food<br/>Whoever that's fuckin' with him, fuck you niggas, and fuck the industry too<br/>If you take it there, I'm takin' it further<br/>Psst, that's somethin' you don't wanna do<br/>[Outro]<br/>Ooh<br/>We don't wanna hear you say "nigga" no more<br/>We don't wanna hear you say "nigga" no more<br/>Stop</p>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='line-scale' />
        </>
    )
}

export default Projects