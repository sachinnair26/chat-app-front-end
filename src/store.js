import {createStore, compose, applyMiddleware} from 'redux';
import combinedReducers from './Components/Reducers'
import thunk from 'redux-thunk';
const initalState = { }

const allEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const store = createStore(combinedReducers,initalState,allEnhancers);
console.log(store.getState());

export default store;