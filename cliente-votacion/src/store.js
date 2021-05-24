import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userLoginReducer } from './reducers/userReducer';
import { voteRequestReducer } from './reducers/voteReducer';

const initialState = {
    userLogin: {
        userInfo: localStorage.getItem('userInfo') 
            ? JSON.parse(localStorage.getItem('userInfo')) 
            : null,
    },
};

const reducer = combineReducers({
    userLogin: userLoginReducer,
    voteRequest: voteRequestReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;