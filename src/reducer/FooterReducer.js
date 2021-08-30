const FOOTER_LOAD = '[NCL] FOOTER LOAD'
const FOOTER_UPDATE = '[NCL] FOOTER LOAD'
const initialState = { }


export const startLoadFooter = footer => ({ type: FOOTER_LOAD, payload: footer });
export const startUpdateFooter = (id,red_instagram,red_Facebook,red_youtube,direccion,movil,horario,email,telefono) => ({
    type: FOOTER_UPDATE,
    payload: {
        id,red_instagram,red_Facebook,
        red_youtube,direccion,movil,
        horario,email,telefono
    }
})
const FooterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOOTER_LOAD:
            return {
                ...state,
                ...action.payload
            }
        case FOOTER_UPDATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default FooterReducer