import { 
    USER_LOGIN_FAIL, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT
} from "../states/userStates"
import data from '../data'

const usuarios = data.usuarios

export const login = (nombre, dni, contraseña) => async (dispatch) => {
    dispatch({type: USER_LOGIN_REQUEST, payload: {nombre, dni, contraseña}});

    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        if (nombre === usuario.nombre) {
            dispatch({type: USER_LOGIN_SUCCESS, payload: {usuario}});
            localStorage.setItem('userInfo', JSON.stringify(usuario));
            break;
        } else {
            dispatch({type: USER_LOGIN_FAIL, payload: 'Nombre, DNi o Contraseña incorrecta.'});
        }
    }

/** CONEXION CON FABRIC 
 * 
 * try {
 *      const {dataUsuario} = await SDK(nombre, dni, contraseña)
 *      dispatch({type: USER_LOGIN_SUCCESS, payload: {dataUsuario}})
 *   }catch(error) {
 *       dispatch({type: USER_LOGIN_FAIL, payload: error})
 *   }
 * 
*/ 
}


// Borra los datos del local storage
export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({type: USER_LOGOUT});
}