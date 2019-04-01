import React from 'react'
import { Link } from 'react-router-dom'

const DontMatch = () => (
    <main role="main">
        <h1>Error 404 | Page Not Found</h1>
        
        <p className="lead">A página que você está procurando não existe!</p>
        <p className="lead">
            <Link to="/login" className="btn btn-lg btn-primary">Ir para tela de Login</Link>
        </p>
    </main>
)

export default DontMatch