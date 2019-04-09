import {createStore,combineReducers} from 'redux'
import LIST from './list'
const reducer=combineReducers({
    LIST
})
const Store=createStore(reducer)
export default Store