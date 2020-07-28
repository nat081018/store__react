import React from "react";
import "./collectionPreview.style.scss"

import  CollectionItem from "../collection-item/collectionItem.component"


const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item, index) => index < 4 )
                .map(({id, ...itemsOtherProps}) => ( 
                < CollectionItem key={id} {...itemsOtherProps}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview