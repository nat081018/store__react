import React from "react"
import {connect} from "react-redux"
import "./card-icon.style.scss"

import {toggleCardHidden, addItemToCard} from "../../redux/card/card.actions" 

import {ReactComponent as ShoppingBag} from "../../assets/shopping-bag.svg"


const CardIcon = ({toggleCardHidden}) => (
    <div className="cart-icon" onClick={toggleCardHidden}>
        <ShoppingBag  className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapStateToProps = () => ({
    
})

const  mapDispatchToProps = (dispatch)  => ({
    toggleCardHidden: () => dispatch(toggleCardHidden()),
    addItemToCard: () => dispatch(addItemToCard())
})
export default connect(
    null, 
    mapDispatchToProps
)(CardIcon)