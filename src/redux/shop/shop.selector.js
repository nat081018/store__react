import {createSelector} from  "reselect"
import memoize from 'lodash.memoize';
const  MAP_ID = {
    hats: 1,
    jackets: 2,
    sneakers: 3,
    womens: 4,
    mens : 5,
}


const shopSelect = (state) => state.shop


export const shopSelector = createSelector(
    [shopSelect],
    (shop) => shop.colletions

)

export const selectCollectionFromPreview = createSelector(
    [shopSelector],
    (colletions) => Object.keys(colletions).map((key) => colletions[key])
)

// export const  selectCollection = memoize(
//     (collectionUrlParam ) => {
//         createSelector(
//             [shopSelector],
//             (colletions) =>  colletions[collectionUrlParam]
//         )
//     }
// )


export const  selectCollection = (collectionUrlParam ) => 
        createSelector(
            [shopSelector],
            (colletions) =>  colletions[collectionUrlParam]
        )
    

// export const selectCollection = (collectionUrlParam) => 
//     createSelector(
//         [shopSelector],
//         (colletions) => 
//         colletions.find(
//             (colletion) => colletion.id ===  MAP_ID[collectionUrlParam]
            
//         )
//     )

