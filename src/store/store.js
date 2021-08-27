import {createStore, combineReducers,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import FooterReducer from '../reducer/FooterReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    footer: FooterReducer
})

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)