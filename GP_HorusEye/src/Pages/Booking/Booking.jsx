
import  './Booking.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.all.js'


function Booking  () {
    const [Hotels,SetHotels] =useState([])
    const [city,SetCity] = useState('')
    const [checkIn,SetCheckIn] = useState('')
    const [checkOut,SetCheckOut] = useState('')
    const [room,SetRoom] = useState('')

    
    ////////////////////////fetch////////////////////////////

    useEffect(() => {axios.get('http://localhost:3000/product')
        .then((response) => {
            SetHotels(response.data)
        }).catch
        ((error) => {
            console.log(error)
        })} ,[])

/////////////////////OnBooking/////////////////////////////

    const onBooking  =(e) =>{
        e.preventDefault()
        axios.post('url',null, 
        {params:{
            city:city,
            checkIn:checkIn,
            checkOut:checkOut,
            room:room
        }})
        console.log(city)
        console.log(checkIn)
        console.log(checkOut)
        console.log(room)
    }
    ///////////////////////////////Confirmation//////////////////
const ConfirmationBooking =(hotel)=>{
    Swal.fire ({
        title: 'Are sure to confirm this Book?',
        html: `
      <h3>${hotel.name}</h3>
      <p>City: ${city}</p>
      <p>CheckIn: ${checkIn}</p>
      <p>CheckOut: ${checkOut}</p>
      <p>Room: ${room}</p>
      <p>Price: ${hotel.price}</p>
      <p>Rating: ${hotel.rating}</p>
      <p>Description: ${hotel.description}</p>
    `,
         confirmButtonText: 'OK',
        showCancelButton:true,
        cancelButtonText: 'Cancel',
        cancelButtonColor: '#d33',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Booked!', 'Your booking has been confirmed, check your email', 'success')
        }})
}
    return (
        <form className='BackG' onSubmit={onBooking} >
            <Container className='Booking'>
                <Row>
                    <Col className='Col'>
                        <h6>City</h6>
                        <input type='text' placeholder='Search for cities' onChange={(e) => SetCity(e.target.value)} />
                    </Col>
                    <Col  className='Col'>
                        <h6>CheckIn</h6>
                            <input type='date' onChange={(e) => SetCheckIn(e.target.value)}/>
                    </Col>
                    <Col  className='Col'>
                        <h6>CheckOut</h6>
                        <input type='date' onChange={(e) => SetCheckOut(e.target.value)}/>
                    </Col> <Col  className='Col'>
                        <h6>Room</h6>
                        <input type='number' onChange={(e) => SetRoom(e.target.value)}/>
                    </Col>
                    <Col  className='Col'>
                        <button>Sreach</button>
                        
                    </Col>
                </Row>
            </Container>
            
            <div className='Hotels'>
                {
                Hotels.map((hotel) =>{
                    return(
                <div className='card' key={hotel.id}>
                <div className="card-image"></div>
                <div className="category"> 
                <h2>Hotel name: {hotel.name}</h2>
                <p>City: {hotel.city}</p>
                <p>Price: {hotel.price}</p>
                <p>Rating: {hotel.rating}</p>
                <p>Description: {hotel.description}</p>
                <div className='Btns'>
                <button className="btnBook" onClick={()=>{ConfirmationBooking(hotel)}}>Book</button>
                <button className='btnDetails'>view details</button>
                </div>
            </div>
            </div>
                )
                })
                }
            </div>
        </form>
    

    );
}

export default Booking;