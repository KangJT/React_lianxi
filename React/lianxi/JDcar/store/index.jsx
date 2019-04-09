import {createStore,combineReducers} from 'redux'
import LIST from '../store/list'
let reducers=combineReducers({
    LIST
})  
const store=createStore(reducers) 
export default store