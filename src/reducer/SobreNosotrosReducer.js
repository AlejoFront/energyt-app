const MISION_LOAD = '[NCL] MISION LOAD'
const VISION_LOAD = '[NCL] VISION LOAD'
const PROTECCION_DATOS_LOAD = '[NCL] PROTECCION DATOS LOAD'
const POLITICAS_LOAD = '[NCL] POLITICAS LOAD'
const ESTADOS_FINANCIEROS_LOAD = '[NCL] ESTADOS FINANCIEROS LOAD'
const initialStateMision = { }
const initialStateVision = { }
const initialStateProteccion = { }
const initialStatePoliticas = []
const initialStateEstadosFinancieros = []

export const startLoadMision = mision => ({ type: MISION_LOAD, payload: mision });
export const startLoadVision = vision => ({ type: VISION_LOAD, payload: vision });
export const startLoadProteccion = proteccion => ({ type: PROTECCION_DATOS_LOAD, payload: proteccion });
export const startLoadPoliticas = politicas => ({ type: POLITICAS_LOAD, payload: politicas });
export const startLoadeEstadosFinancieros = estadosFinancieros => ({ type: ESTADOS_FINANCIEROS_LOAD, payload: estadosFinancieros });

const MisionReducer = (state = initialStateMision, action) => {
    switch (action.type) {
        case MISION_LOAD:
            return {
                ...state,
                ...action.payload
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
        default:
            return state;
    }
}

export {MisionReducer, VisionReducer, PoliticasReducer, EstadosFinancierosReducer, ProteccionDatosReducer}