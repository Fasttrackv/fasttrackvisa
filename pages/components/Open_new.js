import React from "react";  
import Link from 'next/link'
import Container from 'react-bootstrap/Container' 
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Open_new = (props) => { 
 
  return (
    <>
    
    <div className="ready-get">
      <Container>
        <div className="row align-items-center justify-content-between">
         
          <div className="col-12 col-md-6">
          <h2>
          Open a new ancillary<br />  revenue stream.
          </h2>
          <p> Reduce your costs and operational risk while<br /> enhancing your customer experience.</p>
<p><Link href={'/'}>
									<a className="btn1 pl-4 pr-4">
									Get a demo
								</a></Link></p>
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

export default Open_new;
