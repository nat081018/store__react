import React from "react"
import {connect} from "react-redux"
import "./card-icon.style.scss"

import {toggleCardHidden, addItemToCard} from "../../redux/card/card.actions" 

import {ReactComponent as ShoppingBag} from "../../assets/shopping-bag.svg"


const CardIcon = ({toggleCardHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCardHidden}>
        <ShoppingBag  className="shopping-icon"/>
<span className="item-count">{itemCount}</span>
    </div>
)

// const mapStateToProps = ({card: {cardItems}}) => ({
//     itemCount: cardItems.reduce((accumItems, cardItem) => accumItems + cardItem.quantity , 0)

// })
const mapStateToProps = (state) => ({
    itemCount: state.card.cardItems.reduce((accumItems, cardItem) => accumItems + cardItem.quantity , 0)

})

const  mapDispatchToProps = (dispatch)  => ({
    toggleCardHidden: () => dispatch(toggleCardHidden()),
    addItemToCard: () => dispatch(addItemToCard())
})
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CardIcon)