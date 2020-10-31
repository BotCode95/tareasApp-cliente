import React, {Fragment, useState} from 'react';

const NuevoProyecto = () => {

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
       </Fragment>
     );
}
 
export default NuevoProyecto;