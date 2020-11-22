import {BUY_ICECREAM} from './IceCreamType'

const initialState = {
    noOfIceCream: 20
}

export const IceCreamRuducer = (state = initialState, action) => {

    switch(action.type)
    {
        case BUY_ICECREAM : return( {
            ...state,
            noOfIceCream : state.noOfIceCream-action.payload
        })
        default : return state
    }
}