import React , {Component} from "react"
import "./shop.style.scss"

import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {shopSelector} from "../../redux/shop/shop.selector"


import CollectionPreview from "../../components/collection-preview/collection-preview"

const  ShopPage = ({colletions}) =>  (
            <div className='shop-page'>
                {
                    colletions.map(({id, ...otherCollectionsProps}) => (
                        < CollectionPreview key={id} {...otherCollectionsProps} />
                    ))
                }
              
            </div>
        )


 const mapStateToProps = createStructuredSelector({
    colletions: shopSelector
 })

export default connect(mapStateToProps)(ShopPage)