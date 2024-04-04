import './index.scss';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h2>Software Engineer / Backend / Java / Golang / REST API / Agile</h2>
                <Link to="/contact" className='flat-button'>Contact Me.</Link>
            </div>
        </div>
        </>
    )
}

export default Home;