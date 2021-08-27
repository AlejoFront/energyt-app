import {createStore, combineReducers,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import FooterReducer from '../reducer/FooterReducer';
import {QueHacemosReducer, ProjectsReducer} from '../reducer/QueHacemosReducer';
import { EstadosFinancierosReducer, MisionReducer, PoliticasReducer, ProteccionDatosReducer, VisionReducer } from '../reducer/SobreNosotrosReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    footer: FooterReducer,
    mision: MisionReducer,
    vision: VisionReducer,
    queHacemos: QueHacemosReducer,
    projects: ProjectsReducer,
    politicas: PoliticasReducer,
    estadosFinancieros: EstadosFinancierosReducer,
    proteccionDatos: ProteccionDatosReducer
})

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)