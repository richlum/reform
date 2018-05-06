import {createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers ({
  // insert other custom reducers here as well
  form: formReducer
})


let store = createStore (rootReducer)


// for console access to dump/alter store directly
window.store = store;
export default store;
