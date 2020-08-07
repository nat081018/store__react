import React from "react"
import "./checkout.scss"

import {connect} from "react-redux"

import { createStructuredSelector} from "reselect"
import {selectCardItems, selectCartTotal} from "../../redux/card/card.selectors"

import CheckoutItem from "../../components/checkout-Item/checkoutItem.component";


const CheckoutPage = ({ cardItems, total }) => (
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
    </div>
  );

  const mapStateToProps = createStructuredSelector({
        cardItems: selectCardItems,
        total:  selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage)