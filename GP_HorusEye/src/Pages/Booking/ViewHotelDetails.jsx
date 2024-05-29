import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './ViewHotelDetails.css'

function ViewHotelDetails () {
    let {HotelID} = useParams();
    const [Hotel ,SetHotel ]=useState([])
    useEffect(() =>{
        axios.get (`http://localhost:3000/product/${HotelID}`)
        .then((Hotel)=>{
            SetHotel(Hotel.data)
            console.log(Hotel);
        })
    },[HotelID])

    return(<>
    <div className="BG">
        <div className="HotelDetails">
    <h2>Hotel name: {Hotel.name}</h2>
                <p>City: {Hotel.city}</p>
                <p>Price: {Hotel.price}</p>
                <p>Rating: {Hotel.rating}</p>
                <p>Description: {Hotel.description}</p>
                </div>

    </div>
        </>
    )

}export default ViewHotelDetails;