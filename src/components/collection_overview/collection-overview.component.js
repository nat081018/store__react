import React from "react"
import "./collection-overview.style.scss"
import {createStructuredSelector} from "reselect"
import {selectCollectionFromPreview} from "../../redux/shop/shop.selector"

import CollectionPreview from "../collection-preview/collection-preview"
import {connect} from "react-redux"



const CollectionOverview = ({ collections}) =>(
    <div className="collection-overview">
        {
            collections.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionFromPreview
})

export default connect(mapStateToProps)(CollectionOverview)