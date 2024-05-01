import '../SignUp/SignUp.css'
import Container from 'react-bootstrap/Container';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useState} from 'react';
import { FaLock} from "react-icons/fa";

function Password(){

    //const inputRef = useRef();      const [filee, Setfile]=useState("")

    const [password, Setpassword]=useState("")
    const [Confrim , SetConfrim]=useState("")
    let navigate=useNavigate()




    {/*const handleFileChange = (event) => {
        const file = event.target.files[0];
        const label = inputRef.current.previousSibling;
        label.textContent = file.name;
        Setfile(event.target.files[0]);
        
    };*/}

    const SignSubmit =(e) =>{
        e.preventDefault()
        axios.post("http://localhost:3000/posts", 
            {
                
                password,
                Confrim,
                
            })
            navigate('/');
    }

    return(
    <>
    <form className="LoginBackGround" onSubmit={SignSubmit}>
    <Container fluid className="Wrapper" >
    
            <h1 className='h'>Set Password</h1> 
            
        <div className='InputBox'>
                <input type='password' placeholder='password' required onChange={(e) =>Setpassword(e.target.value)}></input><FaLock className='icon'/>
            </div>
            <div className='InputBox'>
                <input type='password' placeholder='Confirm password' required onChange={(e) =>SetConfrim(e.target.value)}></input><FaLock className='icon'/>
            </div>
            <div className="InputBoxFile">
            
    </div>
        <button type='submit' className='LOG'>Create account</button>
        
    
        </Container>
    </form>
    
    </>
    )
}export default Password;