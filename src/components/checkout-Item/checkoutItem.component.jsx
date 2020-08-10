import React from "react"
import "./checkoutItem.style.scss"

import {connect} from "react-redux"
import {deleteItemFromCard,  addItemToCard, removeCardItem} from "../../redux/card/card.actions"



const CheckoutItem = ({cardItem,  deleteItemFromCard,  addItemToCard, removeCardItem }) => {
  const {imageUrl, name, quantity, price} = cardItem
  
  return(
    <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <div className="quantity">
    <div className="arrow" onClick={() => removeCardItem(cardItem)}>&#10094;</div>
    <span className='value'>{quantity}</span>
    <div className="arrow" onClick={() =>  addItemToCard(cardItem)}>&#10095;</div>
    </div>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={() => deleteItemFromCard(cardItem)}>&#10005;</div>
    </div>
  


  
)
}
const mapDispatchToProps = (dispatch) => ({
  deleteItemFromCard: (item) => dispatch(deleteItemFromCard(item)),
  addItemToCard: (item) => dispatch(addItemToCard(item)),
  removeCardItem: (item) => dispatch(removeCardItem(item))
}) 

export default connect(null, mapDispatchToProps)(CheckoutItem)