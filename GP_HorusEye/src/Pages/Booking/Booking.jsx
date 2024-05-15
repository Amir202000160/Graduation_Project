import  './Booking.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Booking  () {
    const [Hotels,SetHotels] =useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/product')
        .then((response) => {
            SetHotels(response.data)
        })
    },[])
    

    return (
        <div className='BackG'>
            <Container className='Booking'>
                <Row>
                    <Col className='Col'>
                        <h6>City</h6>
                        <input type='text' placeholder='Search for hotels' />
                    </Col>
                    <Col  className='Col'>
                        <h6>CheckIn</h6>
                            <input type='date' />
                    </Col>
                    <Col  className='Col'>
                        <h6>CheckOut</h6>
                        <input type='date' />
                    </Col> <Col  className='Col'>
                        <h6>Room</h6>
                        <input type='number' />
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
                <h3>{hotel.name}</h3>
                <h3>{hotel.Email}</h3>
                <p>{hotel.city}</p>
                <p>{hotel.price}</p>
                <p>{hotel.rating}</p>
                <p>{hotel.description}</p>
                <button>Book</button>
            </div>
            </div>
                    )
                })
                }
            </div>
        </div>
    

    );
}

export default Booking;