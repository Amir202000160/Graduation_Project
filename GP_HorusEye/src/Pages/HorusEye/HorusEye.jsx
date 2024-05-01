import axios from 'axios'
import './HorusEye.css'
import {useRef, useEffect, useState} from 'react'

function HorusEye(){


    const videoRef = useRef(null)
    const photoRef = useRef(null)
    const [hasphoto, setHasphoto] = useState(false)


    const takePhoto = () => {
            const width =414;
            const height = width / (16/9);
            let video = videoRef.current;
            let photo = photoRef.current;
            photo.width = width;
            photo.height = height;
            let ctx = photo.getContext('2d');
            ctx.drawImage(video, 0, 0, width, height);
            setHasphoto(true);
            axios.post('http://localhost:3000/posts',
            {
            photo: photoRef.current
            })
    }

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: {width: 300, height: 300}
        })
        .then(stream => {
            let video=videoRef.current;
            video.srcObject= stream;
            video.play();
        })}

        useEffect(() => {
            getVideo();
        },[ videoRef])
    
    return(
        <div className="BackGround">
            <div className='Header'>
                <h1 className='H'>Welcome to our new technology</h1>
                <div className='HE'>
                <img src='/public/Group 4.png'  className='img'/>
                <h1>Horus EYE</h1>
                <img src='/public/Group 4.png'className='img' />
                </div>


            </div> 
            <div className="HorusEye">
                <div >
                <video ref={videoRef} className="video" ></video>
                <button onClick={takePhoto}>Capture</button>
                </div>
                <input type="file" accept="image/*" capture="camera" />
            </div>
            { /*
            <div className={'result' + hasphoto ? 'hasphoto' :''}>
                <canvas ref={photoRef} className="photo"></canvas>
            </div>
    */}
        
            
            <h3 className='HorusEyeDec'> Descripttion</h3>
            <p className='description'><h6>dpksapfks][kas[kf][askf]pkaksk]psfak]ksfa]pkas]kf]s</h6></p>


            
        </div>
    )
}
export default HorusEye;