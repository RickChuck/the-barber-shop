import React from "react";
import StripeCheckout from "react-stripe-checkout";
// import axios from "axios";
import logoImg from '../Header/barber-shop.svg';

// require('dotenv').config();

// const {STRIPE_KEY} = process.env

// const CURRENCY = 'USD'
// const succesfulPayment = data => {
//   alert('Paymetn Successful')
//   console.log(data)
// };

// const errorPayment = data => {
//   alert('Payment Error');
//   console.log(data);
// };

// const onToken = (amount) => token => {
//   axios.post(SERVER_PORT,{
//     source: token.id,
//     currency: CURRENCY,
//     product_price: amount
//   })
//   .then(succesfulPayment)
//   .catch(errorPayment);
// }

export default class TakeMoney extends React.Component {
  onToken = (token) => {
    console.log(token)
    fetch('/charge', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.text().then(data => {
        // alert(`We are in business, ${data.email}`);
        console.log(data)
      });
    });
  }

  render(){
    return(
      
      <StripeCheckout
        token={this.onToken}
        label="Checkout"
        name="the Barber Shop"
        currency='USD'
        stripeKey='pk_test_X1oGQOXUJ7jPdzRrhIcU8rAu'
        description="Please enter information to continue."
        image={logoImg}
        panelLabel="Click to confirm"
      />

    )
  }
};



// export default class CheckoutBtn extends React.Component {
//   onToken = (token) => {
//     fetch('/save-stripe-token', {
//       method: 'POST',
//       body: JSON.stringify(token),
//     }).then(response => {
//       response.json().then(data => {
//         alert(`We are in business, ${data.email}`);
//       });
//     });
    //     const CheckoutBtn = () => {
    //       const publishableKey = STRIPE_KEY;
          
    //       const onToken = token => {
    //         const body = {
    //           amount: 999,
    //           token: token
    //         };
    //         axios
    //         .post("/charge", body)
    //         .then(res => {
    //           console.log(res);
    //           alert("Payment Success");
    //         })
    //         .catch(error => {
    //           console.log("Payment Error: ", error);
    //           alert("Payment Error");
    //         });
    //       };
    //       return (
    //         <StripeCheckout
    //         label="Checkout" //Component button text
    //         name="the Barber Shop" //Modal Header
    //         description="Please enter information to continue."
    //         panelLabel="Total:" //Submit button in modal
    //         amount={999}
    //         token={onToken}
    //         stripeKey={publishableKey}
    //         image={headerImg} //Pop-in header image
    //         billingAddress={false}
    //         />
    //         );
    //     }
    // };
// };