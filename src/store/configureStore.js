
import {createStore} from 'redux'
import rootReducer from '../reducer'



export default function configureStore(initialState){
 let store= createStore(rootReducer, {});
 return store;
}
