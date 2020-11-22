const redux = require('redux')
const reduxThunk = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware


const intialState = {
    loading: false,
    users:[],
    error:''
}

const fetch_user_data = 'fetch user data'
const fetch_success = 'fetch data success'
const fetch_error = 'error in fetching'

fetchUserData = () => {
    return{
        type: fetch_user_data
    }
}

fetchSuccess = (users) => {
    return{
        type: fetch_success,
        payload: users
    }
}

fetchError = (error) => {
    return{
        type: fetch_error,
        payload: error
    }
}

const reducer = (state = intialState, action) => {
    
    switch(action.type)
    {
        case fetch_user_data : return{
            ...state,
            loading: true
        }
        case fetch_success : return{
            ...state,
            loading: false,
            users: action.payload
        }
        case fetch_error : return{
            ...state,
            loading: false,
            error: action.payload
        }
    }
}

const userData  = () => {
    return function(dispatch) {
        dispatch(fetchUserData())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(user => user.id)
                dispatch(fetchSuccess(users))
            })

            .catch(error => {
                dispatch(fetchError(error.message))
            })
    }
}



const store = createStore(reducer, applyMiddleware(reduxThunk))
store.subscribe(() => console.log(store.getState()))
store.dispatch(userData())
