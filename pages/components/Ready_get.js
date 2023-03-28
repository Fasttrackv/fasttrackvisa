import React from "react";  
import Link from 'next/link'
import Container from 'react-bootstrap/Container' 
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Ready_get = (props) => { 
 
  return (
    <>
    
    <div className="ready-get">
      <Container>
        <div className="row align-items-center justify-content-between">
         
          <div className="col-12 col-md-6">
          <h2>
          The Smartest Way to get an eVisa from anywhere to anywhere
          </h2>
          <p> You will not find a simpler way to get your eVisa online.  Simply fill in the online form,  upload your documents and make the payment securely via Stripe.  Your eVisa will be sent to you via e-mail within a few hours to a few days.  And what's more,  we will provide you with a complimentary eSIM to keep you connected & online on your journey.</p>
          <p>  Can there be a better deal ?</p>
 
          </div>
          <div className="col-12 col-md-5">
          <figure><LazyLoadImage className="w-100" src="/img/ready-get.png" /></figure>
          </div>
           
        </div>
      </Container>
    </div>
    
      
  </>
  );
}

export default Ready_get;
