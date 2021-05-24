import { 
    VOTE_REQUEST, 
    VOTE_REQUEST_CONFIRMED,
    VOTE_REQUEST_CANCELED, 
    VOTE_REQUEST_FAIL, 
    VOTE_REQUEST_SUCCESS
} from "../states/voteStates"


export const solicitarVotar = (candidato) => async (dispatch) => {
    dispatch({type: VOTE_REQUEST, payload: {candidato}});
}

export const confirmarVoto = (candidato) => async (dispatch) => {
    
    dispatch({type: VOTE_REQUEST_CONFIRMED, payload: {candidato}})
    
    try {
        //Conexion con Fabric
        setTimeout(() => {
            dispatch({type: VOTE_REQUEST_SUCCESS, /*payload: {comprobante}*/})
        }, 5000);
    } catch(error) {
        dispatch({type: VOTE_REQUEST_FAIL, payload: error})
    }
}

export const cancelarVoto = () => async (dispatch) => {
    dispatch({type: VOTE_REQUEST_CANCELED})
}