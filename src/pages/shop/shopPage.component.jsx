import React , {Component} from "react"
import "./shop.style.scss"
import {Route} from "react-router-dom"


import CollectionOverview from "../../components/collection_overview/collection-overview.component"
import Collection from "../collection/collection.component"

import CollectionPage from "../collection-page/collectionPage.component"

const  ShopPage = ({match}) => {  
    console.log(match)
    return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
}





export default ShopPage