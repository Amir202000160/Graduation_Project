import { useEffect, useState } from 'react';
import './ViewHistory.css'
import { useRecoilValue } from 'recoil';
import { CityState,CheckInState,CheckOutState, RoomState } from '../Booking/Booking';
import axios from 'axios';

function ViewHistory() {

const [History, SetHistory] =useState([])
const [BookedHistory, SetBookedHistory] =useState(true)
const [LandMarked, SetLandMarked] =useState(false)
let city =useRecoilValue(CityState)
let checkIn =useRecoilValue(CheckInState)
let checkOut =useRecoilValue(CheckOutState)
let room =useRecoilValue(RoomState)

useEffect(() => {
  axios.get('http://localhost:3000/product')
  .then((response) => {
    SetHistory(response.data)
    console.log(response.data)
  }).catch
  ((error) => {
    console.log(error)
  })
}, [])
  





const Booked=()=>{
  SetBookedHistory(true)
  SetLandMarked(false)
}

const LandMark=()=>{
  SetBookedHistory(false)
  SetLandMarked(true)
}
  
  return (
    <div className='background'>
      <div className='headers'>
      <a className='Navigate' onClick={Booked}>Booking</a>
      <a className='Navigate' onClick={LandMark}>Landmarks</a>
      </div>
      <div className='Line'></div>
      
    { BookedHistory && (History.map((history) =>{
      return(
        <div className='History 'key={history.id}>
              <h2 >Hotel name: </h2>
              <p>City: </p>
              <p>CheckIn: {history.checkIn}</p>
              <p>CheckOut: {history.checkOut}</p>
              <p>Room: {history.room}</p>

        </div>
      )
    }) ) }
      { LandMarked && (<div className='History'>
        <div className='HistoryCard'>
          <div className='HistoryCard1'>
            <h2>Landmark name: </h2>
            <p>City: </p>
            <p>Rating: </p>
            <p>Description: </p>
          </div>
        </div>
      </div>) }
    
    </div>
  );
}export default ViewHistory;