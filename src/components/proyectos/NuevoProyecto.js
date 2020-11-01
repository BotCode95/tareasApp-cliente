import React, {Fragment, useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
const NuevoProyecto = () => {

    const ProyectoContext = useContext(proyectoContext);
    const {formulario} = ProyectoContext;

    //state proyecto
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    const onChange = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const crearProyecto = e => {
        e.preventDefault();

        //reiniciar el form
        setProyecto({
            nombre:''
        })
    }
    return ( 
       <Fragment>
            <button
            type="button"
            className="btn btn-primario btn-block"
            >Nuevo Proyecto</button>

            {
                formulario 
                ? 
                (
                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={crearProyecto}
                >
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        value={proyecto.nombre}
                        onChange={onChange}
                    />
                    <input 
                        type="submit" 
                        className="btn btn-primario btn-block"
                        value="Crear Proyecto"
                    />
                </form>
                ) 
                : 
                (
                    null
                )
            }
       </Fragment>
     );
}
 
export default NuevoProyecto;