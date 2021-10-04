const VALORES_CORPORATIVOS_LOAD = '[VCL] VALORES CORPORATIVOS LOAD'
const VALORES_CORPORATIVOS_ADD = '[VCA] VALORES CORPORATIVOS ADD'
const VALORES_CORPORATIVOS_UPDATE = '[VCU] VALORES CORPORATIVOS UPDATE'
const initialStateValores = {valores: []}
export const startLoadValoresCorp = valorescorporativos => ({ type: VALORES_CORPORATIVOS_LOAD, payload: valorescorporativos });
export const startAddValores = (id, img, descripcion, titulo) => ({
    type: VALORES_CORPORATIVOS_ADD,
    payload: {
        id, img, descripcion, titulo
    }
})

export const startUpdateValores = (id, img,descripcion,titulo) => ({ type: VALORES_CORPORATIVOS_UPDATE, payload: {id, img,descripcion,titulo} });
export const ValoresReducer = (state = initialStateValores, action) => {
    switch (action.type) {
        case VALORES_CORPORATIVOS_LOAD:
            return {
                ...state,
                valores: [...action.payload]
            }
        case VALORES_CORPORATIVOS_ADD:
            return {
                ...state,
                valores: [action.payload, ...state.valores]
            }
        case VALORES_CORPORATIVOS_UPDATE:
            return {
                ...state,
                valores: state.valores.map(
                    val => val.id === action.payload.id
                    ? action.payload
                    : val
                )
            }
        default:
            return state;
    }
}