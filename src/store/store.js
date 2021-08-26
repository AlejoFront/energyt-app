import {createStore, combineReducers,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import FooterReducer from '../reducer/FooterReducer';
import NuestrosClientsReducer from '../reducer/NuestrosClientsReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    nuestrosClientes: NuestrosClientsReducer,
    footer: FooterReducer
})

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)