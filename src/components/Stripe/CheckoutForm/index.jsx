
import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useLocation } from 'react-router-dom';
import '../styles.css'

//tinha um export default aqui e estava quebrando meu codig
export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const {
    state: { dpmCheckerLink },
} = useLocation();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
        console.error('Stripe ou Elements com falha, tente novamente')
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion"
  }

  return (
    <div className="container">
    <form id="payment-form" onSubmit={handleSubmit}>

      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar Agora!"}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
    </div>
  );
}