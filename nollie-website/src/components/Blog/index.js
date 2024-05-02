import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import img5 from '../../assets/images/fill_image_5.png';

const Blog = () => {
    
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
        <div className='container blog-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={15}/>
                </h1>
                <div className='blog-posts'>
                    <div className='post'>
                        <div className='image-left'>
                            <img src={img5} alt="5" />
                        </div>
                        <div className='content-right'>
                            <div className='title-date'>
                                <p><b>Title</b> | 4/20/2024</p>
                            </div>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, cibo vivendo has no, ea utinam nonumy inermis mei. Ex nobis fabellas assentior pro. Ridens aperiam persequeris te qui, eu pro mundi bonorum necessitatibus. Vix id velit labore, postea scriptorem cu sed. Usu id nisl tation indoctum, cu pri summo suavitate.</p>
                            </div>
                        </div>
                    </div>
                    <div className='post'>
                        <div className='image-left'>
                            <img src={img5} alt="5" />
                        </div>
                        <div className='content-right'>
                            <div className='title-date'>
                                <p><b>Title</b> | 4/20/2024</p>
                            </div>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, cibo vivendo has no, ea utinam nonumy inermis mei. Ex nobis fabellas assentior pro. Ridens aperiam persequeris te qui, eu pro mundi bonorum necessitatibus. Vix id velit labore, postea scriptorem cu sed. Usu id nisl tation indoctum, cu pri summo suavitate.</p>
                            </div>
                        </div>
                    </div>
                    <div className='post'>
                        <div className='image-left'>
                            <img src={img5} alt="5" />
                        </div>
                        <div className='content-right'>
                            <div className='title-date'>
                                <p><b>Title</b> | 4/20/2024</p>
                            </div>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, cibo vivendo has no, ea utinam nonumy inermis mei. Ex nobis fabellas assentior pro. Ridens aperiam persequeris te qui, eu pro mundi bonorum necessitatibus. Vix id velit labore, postea scriptorem cu sed. Usu id nisl tation indoctum, cu pri summo suavitate.</p>
                            </div>
                        </div>
                    </div>
                    <div className='post'>
                        <div className='image-left'>
                            <img src={img5} alt="5" />
                        </div>
                        <div className='content-right'>
                            <div className='title-date'>
                                <p><b>Title</b> | 4/20/2024</p>
                            </div>
                            <div className='text'>
                                <p>Lorem ipsum dolor sit amet, cibo vivendo has no, ea utinam nonumy inermis mei. Ex nobis fabellas assentior pro. Ridens aperiam persequeris te qui, eu pro mundi bonorum necessitatibus. Vix id velit labore, postea scriptorem cu sed. Usu id nisl tation indoctum, cu pri summo suavitate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='line-scale' />
        </>
    )
}

export default Blog