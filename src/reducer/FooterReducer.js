const FOOTER_LOAD = '[NCL] FOOTER LOAD'
const initialState = { footer: [] }


export const startLoadFooter = footer => ({ type: FOOTER_LOAD, payload: footer });

const FooterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOOTER_LOAD:
            return {
                ...state,
                footer: [...action.payload]
            }
        default:
            return state;
    }
}

export default FooterReducer