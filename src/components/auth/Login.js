import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const Login = () => {

    //state para iniciar
    const [usuario,setUsuario] = useState({
        email: '',
        password: ''
    });

    //extraer de usuario 
    const {email, password} = usuario;
    const onChange = e => {
        setUsuario({
           //los campos que ya estan completos los almaceno
             ...usuario,
             [e.target.name]: e.target.value

        })
    }

    const iniciarSesion= (e) => {
        e.preventDefault();
        //validar Datos

        //stateInitial
        setUsuario({
            email: '',
            password: ''
        })
        
    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form action=""
                    onSubmit={iniciarSesion}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Correo Electronico"
                            autoComplete="off"
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
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                            />
                    </div>
                </form>
                <Link to={'/crear-cuenta'}>Crear una cuenta</Link>
            </div>
        </div>
     );
}
 
export default Login;