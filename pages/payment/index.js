import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useRouter } from 'next/router'

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CheckoutForm from "../../CheckoutForm";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function App(props) {
  const [clientSecret, setClientSecret] = React.useState("");
  const { c_id } = useRouter();

//console.log(c_id)
  React.useEffect(() => {
    // sessionStorage.setItem('visaPrice', this.props.checkoutpage[0].price);
  // sessionStorage.getItem('finalAmount', total_amount * no_of_pax);
  // sessionStorage.setItem('currency', 'AED');
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ finalAmount: sessionStorage.getItem('finalAmount'),  'currency' : sessionStorage.getItem('currency') }] }),
    })
      .then((res) => res.json())
      .then((data) => {setClientSecret(data.clientSecret), sessionStorage.setItem('clientSecretKey', data.clientSecret)} );
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const loader = 'auto';
  const options = {
    clientSecret,
    appearance,
    loader
  };

  return (
    <div className="App">
       <header className={'App-header hsticky'}>
          <Nav ce_name='' lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'/'}> </Nav>
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

 
  <Footer ce_name=''></Footer>
 



    </div>
  );
}