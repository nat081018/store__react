import {createSelector} from  "reselect"
import memoize from 'lodash.memoize';


const shopSelect = (state) => state.shop


export const shopSelector = createSelector(
    [shopSelect],
    (shop) => shop.colletions

)

export const selectCollectionFromPreview = createSelector(
    [shopSelector],
    (colletions) => Object.keys(colletions).map((key) => colletions[key])
)


export const  selectCollection = memoize(
    (collectionUrlParam ) => 
        createSelector(
            [shopSelector],
            (colletions) =>  colletions[collectionUrlParam]
        )
    
)

