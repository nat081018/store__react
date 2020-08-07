import React from "react"
import "./card-dropdown.style.scss"
import {connect} from "react-redux"
import {selectCardItems} from "../../redux/card/card.selectors"

import { toggleCardHidden} from "../../redux/card/card.actions"

import {withRouter} from "react-router-dom"

import CustomButton from "../custom-button/custom-button.component"
import CardItem from "../card-item/cardItem.component"


const CardDropdown = ({cardItems, history, dispatch}) => (
    <div className='cart-dropdown'>
      <div className="cart-items">
    {
      cardItems.length ?
      (cardItems.map((cardItem) => ( <CardItem key={cardItem.id} item={cardItem}/>) )) :
      (<span className="empty-message">Your card is ampty</span>)
    }
    </div>
    <CustomButton onClick={() => { 
      history.push("/checkout")
      dispatch( toggleCardHidden())
       }}>CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = (state) => ({
  cardItems: selectCardItems(state)

})

export default withRouter(connect(mapStateToProps)(CardDropdown))