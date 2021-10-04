const INNOVACION_LOAD = '[NCL] INNOVACION LOAD'
const INNOVACION_ADD = '[NCL] INNOVACION ADD'
const INNOVACION_UPDATE = '[NCL] INNOVACION UPDATE'
const initialStateInnovacion = { }

export const startLoadInnovacion = innovacion => ({ type: INNOVACION_LOAD, payload: innovacion });
export const startAddImgGal = img => ({
    type: INNOVACION_ADD,
    payload: img
})
export const startUpdateInnovacion = (fotoPrincipal,descripcion,title) => ({ type: INNOVACION_UPDATE, payload: {fotoPrincipal,descripcion,title} });
const InnovacionReducer = (state = initialStateInnovacion, action) => {
    switch (action.type) {
        case INNOVACION_LOAD:
            return {
                ...state,
                ...action.payload
            }
        case INNOVACION_ADD:
            return {
                ...state,
                galeria: [...state.galeria,action.payload]
            }
        case INNOVACION_UPDATE:
            return {
                ...state,
                title: action.payload.title,
                fotoPrincipal: action.payload.fotoPrincipal,
                descripcion: action.payload.descripcion,
            }
        default:
            return state;
    }
}

export {InnovacionReducer}