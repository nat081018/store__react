import React from "react"
import "./card-dropdown.style.scss"
import {connect} from "react-redux"

import CustomButton from "../custom-button/custom-button.component"
import CardItem from "../card-item/cardItem.component"


const CardDropdown = ({cardItems}) => (
    <div className='cart-dropdown'>
    {
      cardItems.map((cardItem) => ( <CardItem key={cardItem.id} item={cardItem}/>) )
    }
    <CustomButton>CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = ({ card: {cardItems} }) => ({
  cardItems

})

export default connect(mapStateToProps)(CardDropdown)