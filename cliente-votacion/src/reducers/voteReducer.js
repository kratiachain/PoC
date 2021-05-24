import { 
    VOTE_REQUEST, 
    VOTE_REQUEST_CANCELED, 
    VOTE_REQUEST_CONFIRMED, 
    VOTE_REQUEST_FAIL, 
    VOTE_REQUEST_SUCCESS
} from "../states/voteStates"

export const voteRequestReducer = (state = {}, action) => {
    switch(action.type) {
        case VOTE_REQUEST:
            return {candidato: action.payload, esperandoConfirmacion: true, procesando: false};
        case VOTE_REQUEST_CONFIRMED:
            return {candidato: action.payload, esperandoConfirmacion: false, procesando: true};
        case VOTE_REQUEST_CANCELED:
            return {esperandoConfirmacion: false, procesando: false};
        case VOTE_REQUEST_SUCCESS:
            return {success: true, comprobante: action.payload, esperandoConfirmacion: false, procesando: false};
        case VOTE_REQUEST_FAIL:
            return {error: action.payload, esperandoConfirmacion: false, procesando: false};
        default:
            return state;
    }
}