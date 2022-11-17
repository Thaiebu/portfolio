import React, { useState } from "react";
import axios from "axios";
// import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


import './index.scss';
import '../Layout/index.scss';

const Contact =() =>{
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://formspree.io/f/xpznbkvb",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks! ,Your message recived", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };
    return(
        <>
        <div className='container contact-page'>
            <div className="text-zone">
            <h1>Contact me</h1>

            <p>
                I am interested in freelance opportunities -especially ambitious or
                large projects. However, if you have other request or question,
                don't hesitate to contact me using below form either.
            </p> 

            <div className="contact-form">
                <form onSubmit={handleOnSubmit}>
                    <ul>
                        <li className="half">
                            <input type="text" name="name" placeholder="Name" required/>
                        </li>
                        <li className="half">
                            <input type="text" name="email" placeholder="Email" required/>
                        </li>
                        <li >
                            <input type="text" name="name" placeholder="Subject" required/>
                        </li>
                        <li >
                            <textarea type ="" placeholder="Message" name="message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND"  disabled={serverState.submitting} />
                        </li>
                    </ul>
                </form>

                  {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                        {serverState.status.msg}
                    </p>
                    )}

            </div>
            </div>

            <div className="info-map">
                Mohamed Thaiebu
                <br/>
                India.
                <br/>
                Lebbai street,
                Chidambaram,
                TamilNadu.
                <br/>
                <span>thaiebu785@gmail.com</span>
            </div>

            <div className="map-wrap">
            <MapContainer center={[11.405491367343034, 79.69303653644853]} zoom={13}>
            <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  />
            <Marker position={[11.405491367343034, 79.69303653644853]}>
              <Popup>Mohamed Thaiebu here, come over for a cup of coffee </Popup>
            </Marker>
          </MapContainer>

            </div>

            
        </div>
        
        </>
    )

}

export default Contact