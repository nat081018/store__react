import React from "react"
import "./checkout.scss"

import {connect} from "react-redux"

import { createStructuredSelector} from "reselect"
import {selectCardItems, selectCartTotal} from "../../redux/card/card.selectors"

import CheckoutItem from "../../components/checkout-Item/checkoutItem.component";
import StripeButton from "../../components/stripe-button/stripe-button.component"


const CheckoutPage = ({ cardItems, total,price }) => (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
           cardItems.map((cardItem) => (
            <CheckoutItem key={cardItem.id} cardItem={cardItem} />
           ))
      }
      
    <div className='total'>TOTAL: ${total}</div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 11/20 - CVV: 123
    </div>
    <StripeButton price={total} />
    </div>
  );

  const mapStateToProps = createStructuredSelector({
        cardItems: selectCardItems,
        total:  selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage)