import axios from 'axios'
import './HorusEye.css'
import {useRef, useEffect, useState} from 'react'

function HorusEye(){


    const videoRef = useRef(null)
    const photoRef = useRef(null)
    const [hasphoto, setHasphoto] = useState("")


  const takePhoto = (e) => {
  const width = 500;
  const height = width;
  let video = videoRef.current;
  let photo = photoRef.current;
if (photo) {
    photo.width = width;
    photo.height = height;}

    let ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    axios.post('http://localhost:3000/product', 
    {
    photo: photo.toDataURL()
    }
    ).then((response) => {
        console.log(response);
        }
    )
  
};

const getVideo = () => {
    navigator.mediaDevices.getUserMedia({
      video: { width: 300, height: 300 }
    })
  .then((stream) => {
      const video = videoRef.current;
      if (video &&!video.srcObject) {
        video.srcObject = stream;
        video.play();
      }
    })
  .catch((error) => {
      console.error('Error getting video:', error);
    });
  };

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

            <div className='Header'>
              <h2>Enter the landmark</h2>
            </div>

            <div className="HorusEye">
                <div >
                <video ref={videoRef} className="video" ></video>
                <button onClick={takePhoto}>Capture</button>
                </div>
                <div>
                <input type="file" id='fileInput' accept="image/*"style={{display:'none'}}/>
                <label for='fileInput' className='LabelFile'>Enter Landmark</label>
                <button onClick={takePhoto}>Process</button>
                </div>
            </div>
            {
            <div className={'result' + hasphoto ? 'hasphoto' :''}>
                <canvas ref={photoRef} className="photo"></canvas>
            </div>
    }
    
        
            
            <h3 className='HorusEyeDec'> Descripttion</h3>
            <div>
  <h6>Your description</h6>
  <p>
    dpksapfks][kas[kf][askf]pkaksk]psfak]ksfa]pkas]kf]s
  </p>
</div>


            
        </div>
    )
}
export default HorusEye;