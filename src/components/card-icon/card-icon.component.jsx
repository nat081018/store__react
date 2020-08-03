import React from "react"
import {connect} from "react-redux"
import "./card-icon.style.scss"

import {toggleCardHidden} from "../../redux/card/card.actions" 

import {ReactComponent as ShoppingBag} from "../../assets/shopping-bag.svg"


const CardIcon = ({toggleCardHidden}) => (
    <div className="cart-icon" onClick={toggleCardHidden}>
        <ShoppingBag  className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const  mapDispatchToProps = (dispatch)  => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
})
export default connect(
    null, 
    mapDispatchToProps
)(CardIcon)