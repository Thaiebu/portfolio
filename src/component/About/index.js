import './index.scss';
import '../Layout/index.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPython,faJs,faReact,faHtml5,faCss3,faGithub } from '@fortawesome/free-brands-svg-icons';

const About = () =>{
    return (
        <>
        <div className="container about-page" >
            <div className="text-zone">
                <h1>About me</h1>
                <p>I'm Mohamed Thaiebu a full stack software developer who enjoys learning new skills that can be used to develop functional, ,custom-made web & Mobile app</p>
                
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                     <FontAwesomeIcon icon={faGithub} color="#FF7F00"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faJs} color="#ffd700"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color="#3173a5"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color="#DD0031"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faHtml5} color="#FF7F00"/>
                    </div>
                    <div className='face6'>
                       
                        <FontAwesomeIcon icon={faPython} color="#0000FF"/>
                        
                    </div>
                    <div className='face6'>
                       
                       <FontAwesomeIcon icon={faPython} color="#0000FF"/>
                   </div>
                   <div className='face6'>
                       
                       <FontAwesomeIcon icon={faPython} color="#0000FF"/>
                   </div>

                </div>
            </div>

        </div>

        {/* <Loader/> */}
        
        </>

    )

}

export default About