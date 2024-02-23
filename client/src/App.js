
import './App.css';
import Footer from './components/Footer';
import Home from './components/home/Home';
import AvailableBus from "../src/components/availableBus/AvailableBus"
import InfoHome from './components/infoPage/InfoHome';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import ReceiptHome from '../src/components/receipt/RHome';


import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../src/components/CheckoutForm'; // Assuming this is your component using useStripe()

const stripePromise = loadStripe('your_public_stripe_key_here');


function App() {
 
  return (
   <>
  {/* <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements> */}
   <BrowserRouter>
    <Routes>
     <Route path="/" element ={<Home />} />
     <Route path="/AvailableBus" element ={<AvailableBus />} />
     <Route path="/info" element ={<InfoHome />} />
     <Route path="/receipt" element ={<ReceiptHome />} />
    </Routes>
    <Footer />
   </BrowserRouter>
   </> 
  );
}

export default App;
