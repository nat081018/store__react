import React from "react"
import "./stripe-button.style.scss"
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({price}) => { 
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HEKfMIZYTM5L368z47RJLKrEjsBAGNBxxCoWJCMxu36ifgzN2Wn6AoPKdB5c4HAJBGz6oifSXXhXhzIOKfbnJhC00CaVpBP6m"
  

     const onToken = (token) => {
        console.log(token);
        alert('Payment Succesful!');
    }
    
    return(
    
    <div>
        <StripeCheckout
        stripeKey={publishableKey}
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}

        />
    </div>
)
}

export default StripeButton