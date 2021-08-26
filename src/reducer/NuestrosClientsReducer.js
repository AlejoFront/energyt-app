const NUESTROS_CLIENTS_LOAD = '[NCL] NUESTROS CLIENTES LOAD'
const initialState = { nuestrosClients: [] }


export const startLoadNuestrosClientes = nuestrosClients => ({ type: NUESTROS_CLIENTS_LOAD, payload: nuestrosClients });

const NuestrosClientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NUESTROS_CLIENTS_LOAD:
            return {
                ...state,
                nuestrosClients: [...action.payload]
            }
        default:
            return state;
    }
}

export default NuestrosClientsReducer