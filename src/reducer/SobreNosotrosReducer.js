const MISION_LOAD = '[NCL] MISION LOAD'
const MISION_UPDATE = '[NCL] MISION UPDATE'
const VISION_LOAD = '[NCL] VISION LOAD'
const VISION_UPDATE = '[NCL] VISION UPDATE'
const PROTECCION_DATOS_LOAD = '[NCL] PROTECCION DATOS LOAD'
const PROTECCION_DATOS_UPDATE = '[NCL] PROTECCION DATOS UPDATE'
const POLITICAS_LOAD = '[NCL] POLITICAS LOAD'
const POLITICAS_UPDATE = '[NCL] POLITICAS UPDATE'
const ESTADOS_FINANCIEROS_LOAD = '[NCL] ESTADOS FINANCIEROS LOAD'
const ESTADOS_FINANCIEROS_ADD = '[NCL] ESTADOS FINANCIEROS ADD'
const ESTADOS_FINANCIEROS_UPDATE = '[NCL] ESTADOS FINANCIEROS UPDATE'
const initialStateMision = { }
const initialStateVision = { }
const initialStateProteccion = { }
const initialStatePoliticas = []
const initialStateEstadosFinancieros = []

export const startLoadMision = mision => ({ type: MISION_LOAD, payload: mision });
export const startUpdateMision = mision => ({ type: MISION_UPDATE, payload: mision });
export const startLoadVision = vision => ({ type: VISION_LOAD, payload: vision });
export const startUpdateVision = vision => ({ type: VISION_UPDATE, payload: vision });
export const startLoadProteccion = proteccion => ({ type: PROTECCION_DATOS_LOAD, payload: proteccion });
export const startUpdateProteccion = (id,descripcion,link) => ({
    type: PROTECCION_DATOS_UPDATE,
    payload: {id,descripcion,link}
})
export const startLoadPoliticas = politicas => ({ type: POLITICAS_LOAD, payload: politicas });
export const startUpdatePolitica = (id, descripcion, order, title, nameClass) => (
    { type: POLITICAS_UPDATE, id, payload: {id: id,descripcion: descripcion, order: order, title:title,nameClass:nameClass} }

);
export const startLoadeEstadosFinancieros = estadosFinancieros => ({ type: ESTADOS_FINANCIEROS_LOAD, payload: estadosFinancieros });
export const startAddEstadosFinancieros = (id, anio, link) => ({
    type: ESTADOS_FINANCIEROS_ADD,
    payload: {
        id,
        anio,
        link
    }
});
export const startUpdateEstadosFinancieros = (id, anio,link) => ({
    type: ESTADOS_FINANCIEROS_UPDATE,
    id,
    payload: {
        id,
        anio,
        link
    }
})
const MisionReducer = (state = initialStateMision, action) => {
    switch (action.type) {
        case MISION_LOAD:
            return {
                ...state,
                ...action.payload
            }
        case MISION_UPDATE:
            return {
                ...state,
                descripcion: action.payload
            }
        default:
            return state;
    }
}

const VisionReducer = (state = initialStateVision, action) => {
    switch (action.type) {
        case VISION_LOAD:
            return {
                ...state,
                ...action.payload
            }
        case VISION_UPDATE:
            return {
                ...state,
                descripcion: action.payload
            }
        default:
            return state;
    }
}

const PoliticasReducer = (state = initialStatePoliticas, action) => {
    switch (action.type) {
        case POLITICAS_LOAD:
            return {
                ...state,
                politicas: [...action.payload]
            }
        case POLITICAS_UPDATE:
            return {
                ...state,
                politicas: state.politicas.map(
                    politica => politica.id === action.id
                    ? action.payload
                    : politica
                )
            }
        default:
            return state;
    }
}

const EstadosFinancierosReducer = (state = initialStateEstadosFinancieros, action) => {
    switch (action.type) {
        case ESTADOS_FINANCIEROS_LOAD:
            return {
                ...state,
                estadosFinancieros: [...action.payload]
            }
        case ESTADOS_FINANCIEROS_ADD:
            return {
                ...state,
                estadosFinancieros: [action.payload, ...state.estadosFinancieros]
            }
        case ESTADOS_FINANCIEROS_UPDATE:
            return {
                ...state,
                estadosFinancieros: state.estadosFinancieros.map(
                    estado => estado.id === action.id
                    ? action.payload
                    : estado
                )
            }
        default:
            return state;
    }
}


const ProteccionDatosReducer = (state = initialStateProteccion, action) => {
    switch (action.type) {
        case PROTECCION_DATOS_LOAD:
            return {
                ...state,
                ...action.payload
            }
        case PROTECCION_DATOS_UPDATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export {MisionReducer, VisionReducer, PoliticasReducer, EstadosFinancierosReducer, ProteccionDatosReducer}