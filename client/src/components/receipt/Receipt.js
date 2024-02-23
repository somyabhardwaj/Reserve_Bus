import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';



function Receipt() {
// const userName = useSelector((state)=>state.bookings.userName);
// const gender = useSelector((state)=>state.bookings.gender);
//  const age = useSelector((state)=>state.bookings.age);
//  const contact= useSelector((state)=>state.bookings.contact);
//  const email= useSelector((state)=>state.bookings.email);
//  const price= useSelector((state)=>state.bookings.price);
//  const seats= useSelector((state)=>state.bookings.seats);

const userData = JSON.parse(localStorage.getItem('userData'));

const {userName, gender, age, contact, email, price, seats} = userData;

console.log({price});
 
  return (
   <>
    <div className='col text-center border rounded p-4'>
    <FontAwesomeIcon icon={faCheck} className='p-2' style={{height:"50px",width:"50px",color:"green", border:"4px solid green", borderRadius:"100%"}} />
 <h1>Booking has been confirmed</h1>
 <p>Ticket Id : s67515</p>
 <p>Payment ID Id : s67515</p>
 <p>Passanger details: {userName}, {gender}, {age} years</p>
 <p>Seat details: {seats}</p>
 <p>Contact Details : {contact}</p>
    </div>
   </>
  )
}

export default Receipt
