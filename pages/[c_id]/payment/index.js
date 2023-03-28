import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useRouter } from 'next/router'

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CheckoutForm from "../../../CheckoutForm2";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function App(props) {
  const [clientSecret, setClientSecret] = React.useState("");
  const { c_id } = useRouter();

console.log(c_id)
  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("../api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
       <header className={'App-header hsticky'}>
          <Nav ce_name={props.country_ext} lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'/'}> </Nav>
        </header>
      

      <div className="container mt-5 pt-5">
     <div className="card card-body mt-5">
     {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
     </div>
      </div>

      <hr />

 
  <Footer ce_name={props.country_ext}></Footer>
 



    </div>
  );
}