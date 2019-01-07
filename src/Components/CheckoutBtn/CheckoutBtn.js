import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const CheckoutBtn = () => {
  const publishableKey = "pk_test_X1oGQOXUJ7jPdzRrhIcU8rAu";
   
  const onToken = token => {
    const body = {
      amount: 999,
      token: token
  };
  axios
      .post("/charge", body)
      .then(res => {
        console.log(res);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
  return (
    <StripeCheckout
      label="Checkout" //Component button text
      name="the Barber Shop" //Modal Header
      description="Enter Information"
      panelLabel="Total:" //Submit button in modal
      amount={999}
      token={onToken}
      stripeKey={publishableKey}
    //   image="" //Pop-in header image
      billingAddress={false}
    />
  );
};
export default CheckoutBtn;