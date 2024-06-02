import { useState } from 'react';
import './ViewHistory.css'
import { useRecoilValue } from 'recoil';
import { CityState,CheckInState,CheckOutState, RoomState } from '../Booking/Booking';

function ViewHistory() {

const [BookedHistory, SetBookedHistory] =useState(false)
const [LandMarked, SetLandMarked] =useState(false)
let city =useRecoilValue(CityState)
let checkIn =useRecoilValue(CheckInState)
let checkOut =useRecoilValue(CheckOutState)
let room =useRecoilValue(RoomState)


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
      {
      !BookedHistory && !LandMarked && (<h1>there is no data</h1>)
      }
    { BookedHistory && (<div className='History'>
        <div className='HistoryCard'>
          <div className='HistoryCard1'>
            <h2>Hotel name:{} </h2>
            <p>City:{city} </p>
            <p>CheckIn: {checkIn}</p>
            <p>CheckOut: {checkOut}</p>
            <p>Room: {room}</p>
            <p>Price/Night: </p>
            <p>Rating: </p>
            <p>Description: </p>
          </div>
        </div>
      </div>) }
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