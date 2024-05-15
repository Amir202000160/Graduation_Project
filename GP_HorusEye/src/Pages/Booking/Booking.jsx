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
                        
                        <div className='card'>
            <div class="card-image"></div>
            <div class="category" key={hotel.id}> {hotel.title} 
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