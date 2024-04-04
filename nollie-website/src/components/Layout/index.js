import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
import MusicChart from '../../assets/images/musicChart.png'

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className='page'>
                <div className='music-chart'><img src={MusicChart} alt='musical chart'/></div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;