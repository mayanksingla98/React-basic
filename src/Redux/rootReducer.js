import { combineReducers } from "redux"
import {cakeReducer} from './Cake/cakeReducer'
import {IceCreamRuducer} from './IceCream/IceCreamReducer'

export const rootReducer = combineReducers({
    cake: cakeReducer, 
    iceCream: IceCreamRuducer
})