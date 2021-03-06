import React from 'react'
import Proyecto from './Proyecto'

const ListadoProyectos = () => {

    const proyectos = [
        {nombre: 'Proyecto 1'},
        {nombre: 'Proyecto 2'},
        {nombre: 'Proyecto 3'},
    ]
    return (  
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}
 
export default ListadoProyectos;