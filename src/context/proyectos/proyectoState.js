import React, {useReducer} from 'react'
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const ProyectoState = props => {
    const initialState = {
        formulario: false
    }

    //dispatch
    const [state, dispatch] = useReducer(proyectoReducer, initialState)


    //funciones

    return (
        <proyectoContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;