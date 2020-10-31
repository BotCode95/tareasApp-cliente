import React, {useState} from 'react'
import { Link } from 'react-router-dom';


const CrearCuenta = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const {nombre, apellido, email, password, confirmar} = usuario

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const crearCuenta = e => {
        e.preventDefault();

        //validar campos

        //password minimo 6 digitos
        //password iguales

        //devolver el form limpio
    }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">

                <h1>Crear Cuenta</h1>

                <form 
                    onSubmit={crearCuenta}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            autoComplete="off"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="apellido">Apellido</label>
                        <input 
                            type="text"
                            id="apellido"
                            name="apellido"
                            autoComplete="off"
                            placeholder="Apellido"
                            value={apellido}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="off"
                            placeholder="Correo Electronico"
                            value={email}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            autoComplete="off"
                            value={password}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Confirmar contraseña"
                            autoComplete="off"
                            value={confirmar}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Crear Cuenta"
                            />
                    </div>
                </form>
                <Link to={'/'}>Iniciar Sesión</Link>
            </div>
        </div>
      );
}
 
export default CrearCuenta;