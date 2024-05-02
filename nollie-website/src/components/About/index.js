import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import img3 from '../../assets/images/fill_image_3.png';

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
                <div className='row2'>
                    <div className='image-about'>
                        <img src={img3} alt="3" />
                    </div>
                    <div className='biography'>
                        <p>Lorem ipsum dolor sit amet, tantas veritus pericula quo cu, an qui quot munere nemore, ad est evertitur moderatius. Semper praesent an usu, ne sit lorem discere. Erat error iriure duo at. Cu mea choro tritani, facer cetero prompta ei his. Vis insolens recusabo salutatus te. Ignota philosophia definitiones vix an, pri ex debet dissentiunt, an eam adhuc voluptua appellantur. At omittam tacimates accommodare mel.</p>
                        <p>Fierent explicari vituperata ne has. No cum copiosae inimicus salutandi, eu nam magna graece vituperatoribus. Eos dico utinam detracto at. Dicat nostro his id. Antiopam adolescens signiferumque ex vix, nam movet ponderum signiferumque ei, ea timeam facilis per. Nam equidem argumentum ei, qui mutat latine ad. No est nominati elaboraret.</p>
                        <p>Elit mutat verterem cum at, tritani repudiandae eu mei, eos quidam sententiae disputando et. Brute dolorem temporibus ad quo. Eos duis recusabo salutandi eu. Nostro maluisset nec ne. Audiam omittantur reformidans has ut, scripta ocurreret ex pri. Ex idque possit aliquam vis.</p>
                        <p>Qui ubique corrumpit percipitur at, exerci oportere ex est. Tibique commune explicari pri ea. Vero scripserit ius an, at hinc sadipscing vituperatoribus ius. Salutatus liberavisse ex eam. No cum nusquam luptatum, alii legimus vim ea, has at volumus omittantur.</p>
                        <p>Ex hinc feugait nam. Sit ea tempor qualisque, usu ei hinc fuisset. Ius aeque ceteros no, pri veri percipit cu, te duis porro consulatu quo. Ex tollit inimicus per.</p>
                    </div>
                </div>
            </div>

        </div>
        <Loader type="line-scale" />
        </>
    )
}

export default About;