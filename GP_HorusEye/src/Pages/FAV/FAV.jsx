import '../FAV/FAV.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
function FAV(){
    const [places, setPlaces] = useState(false);
let ele = null;

    if (places){
        ele = <Container fluid className="Back">
        <Row className='HEADER'>
        <h1>Mark your memories</h1>
       </Row> 
       Your favorite places are here
       <Row className='Row'>
       <Col className='cardd shadow'>
       <h6> PIC</h6>
       <button className='btn btn-primary' onClick={() =>setPlaces(true)}>Upload</button>
       </Col>
       </Row>
       </Container>
    }
    else {
        ele = <><Container fluid className="Back">
        <Row className='HEADER'>
        <h1>Mark your memories</h1>
       </Row> 
       Your favorite places are here
       <Row className='Row'>
       <Col className='cardd shadow'>
       <h6> you Have not uplaod any place yet</h6>
       <button className='btn btn-primary' onClick={() =>setPlaces(true)}>Upload</button>
       </Col>
       </Row>
       </Container></>}
return(
    <>{ele}</>
)
}
export default FAV;




