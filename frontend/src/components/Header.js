import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => (
    <header className="mb-auto">
        <div className="inner">
            <h3 className="brand">TODO List</h3>
            <nav className="nav justify-content-center">
                {!props.isAuth ? 
                    <React.Fragment>
                        <Link className="nav-link" to="/login">Entrar</Link>
                        <Link className="nav-link" to="/registrar">Registrar</Link>
                    </React.Fragment>
                :
                    <Link to="/logout" className="nav-link">Sair</Link>
                }
            </nav>
        </div>
    </header>
)

export default Header