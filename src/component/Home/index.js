// import LogoTitle from "../../assets/images/logo-s.png";
import { Link } from 'react-router-dom';
import Loader from 'react-loaders'
import "../Layout/index.scss";
import "./index.scss";
import  Miracle from '../../assets/images/Full-Stack-Developer.jpg';

const Home =() => {
    return(
        <>
        <div className="container home-page">
            <div className='text-zone'>
                <h1>Hi , <br/> I'm  
                {/* <img src={LogoTitle} alt="developer" /> */}
                <span>   Mohamed Thaiebu</span>
                <br/>
                Python Fullstack Developer
                </h1>
                <br/>
                <Link to="/contact" className="flat-button"> Cantact me</Link>
                
            </div>

            <div className='image'>
                <img src={Miracle} alt="logo" />

            </div>

        </div>
         <Loader type="pacman" />
        
        </>

    )
}

export default Home