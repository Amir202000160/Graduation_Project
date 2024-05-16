import  './Booking.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Booking  () {
    const [Hotels,SetHotels] =useState([])
    const [city,SetCity] = useState('')
    const [checkIn,SetCheckIn] = useState('')
    const [checkOut,SetCheckOut] = useState('')
    const [room,SetRoom] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/product')
        .then((response) => {
            SetHotels(response.data)
        })
    },[])

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
                <h2>{hotel.name}</h2>
                <p>{hotel.city}</p>
                <p>{hotel.price}</p>
                <p>{hotel.rating}</p>
                <p>{hotel.description}</p>
                <button className="btnBook">Book</button>
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