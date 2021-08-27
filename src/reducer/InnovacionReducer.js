const INNOVACION_LOAD = '[NCL] INNOVACION LOAD'

const initialStateInnovacion = { }

export const startLoadInnovacion = innovacion => ({ type: INNOVACION_LOAD, payload: innovacion });

const InnovacionReducer = (state = initialStateInnovacion, action) => {
    switch (action.type) {
        case INNOVACION_LOAD:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export {InnovacionReducer}