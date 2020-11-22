const redux  = require('redux') 
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const combineReducers = redux.combineReducers
const logger = reduxLogger.createLogger()
 
 const buy_cake = 'Buy Cake'
 const buy_iceCream = 'Buy Ice Cream'

 function buyCake()
 {
     return{
        type: buy_cake,
        info: 'First redux action'
     }
 }

 function buyIce()
 {
     return{
        type: buy_iceCream,
        info: 'Second redux action'
     }
 }

 const cakeInitialState = {
     numOfCake: 10
 }
 
 const iceInitialState = {
    numOfIcecream: 20
}

 const cakeReducer = (state = cakeInitialState,action) => {

    switch(action.type)
    {
        case buy_cake : return{
            ...state,
            numOfCake: state.numOfCake -1
        }
        default: return state
    }

 }

 const IceReducer = (state = iceInitialState,action) => {

    switch(action.type)
    {
        case buy_iceCream : return{
            ...state,
            numOfIcecream: state.numOfIcecream -1
        }
        default: return state
    }

 }

 root_reducer = combineReducers({
     cake: cakeReducer,
     ice: IceReducer
 })

 const store = createStore(root_reducer, applyMiddleware(logger))
//  console.log('Initial State',store.getState())

//  const unsubscribe = store.subscribe(() => console.log('Updated State: ',store.getState()))
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyIce())
 store.dispatch(buyIce())
//  unsubscribe()
