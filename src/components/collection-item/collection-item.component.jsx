import React from 'react';

import './collection-item.styles.scss';

import {connect} from "react-redux"

import CustomButton from "../custom-button/custom-button.component"
import {addItemToCard } from "../../redux/card/card.actions"

const CollectionItem = ({ item, addItemToCard }) =>{  
  const {id, name, price, imageUrl} = item
  
  
  return(
  <div className='collection-item'>
    <div   
    className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}>
    
    </div>
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton className="custom-button" inverted onClick={() => addItemToCard(item)} >Add</CustomButton>
  </div>
)};

const mapDispachToProps = (dispatch) => ({
  addItemToCard: (item) => dispatch(addItemToCard(item)) 
})

export default connect(null,  mapDispachToProps)(CollectionItem);
