import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';


function Fare() {
  const dispatch = useDispatch();
  const userName = useSelector((state)=>state.bookings.userName);
  const gender = useSelector((state)=>state.bookings.gender);
   const age = useSelector((state)=>state.bookings.age);
   const contact= useSelector((state)=>state.bookings.contact);
   const email= useSelector((state)=>state.bookings.email);
   const price= useSelector((state)=>state.bookings.price);
   const seats= useSelector((state)=>state.bookings.seats);

   const userData = {
    userName ,
    gender,
    age ,
    contact,
    email,
    price,
    seats


   }

    const makePayment = async()=>{

      localStorage.setItem("userData", JSON.stringify(userData));
      const stripe = await loadStripe("pk_test_51OlaPSSHloP9u3kTX5cPUzjEjRGMAj9Je7vvxlg58K8c3QsaRLIoI5uNbgo2jYzmWlhdWNPuecDsy2eWi353Z5bW00GPqwKg9f");

      const body = {
          products:price
      }
      const headers = {
          "Content-Type":"application/json"
      }
      const response = await fetch("http://localhost:5000/api/create-checkout-session",{
          method:"POST",
          headers:headers,
          body:JSON.stringify(body)
      });

      const session = await response.json();

      const result = stripe.redirectToCheckout({
          sessionId:session.id
      });
      
      if(result.error){
          console.log(result.error);
      }
  }
  
  
  
  return (
    <div className='container ' style={{width:"100%"}}>
      <div className='border shadow p-4 rounded'>
        <h5 className="mb-4">Fare details</h5>
        <div className='row'>
          <div className='col text-center'>
            <div className='d-flex justify-content-between mb-3'>
              <p>Bus Fare</p>
              <p>₹ {price}</p>
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <p>Tax</p>
              <p>₹ 0</p>
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <p>Offer Applied</p>
              <p>₹ 0</p>
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <p>Total Price</p>
              <p>₹ {price}</p>
            </div>
            {/* <Link to="/receipt"> */}
            <button className="btn btn-danger" onClick={makePayment}>Proceed To Payment</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fare;
