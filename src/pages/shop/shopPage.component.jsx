import React , {Component} from "react"
import "./shop.style.scss"
import SHOP_DATA from "../../data.local";

import CollectionPreview from "../../components/collection-preview/collectionPreview.component"

class ShopPage extends Component {
    constructor(){
        super()

        this.state= {
            colletions: SHOP_DATA
        }
    }

    render() {
        const { colletions}  = this.state
        return(
            <div className='shop-page'>
                {
                    colletions.map(({id, ...otherCollectionsProps}) => (
                        < CollectionPreview key={id} {...otherCollectionsProps} />
                    ))
                }
              
            </div>
        )
    }
}

export default ShopPage