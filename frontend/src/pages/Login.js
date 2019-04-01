import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { login } from '../store/ducks/auth'

class Login extends Component {

    state = {
        email: "",
        password: "",
        error: ""
    };

    onSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state
        this.props.login(email, password)
    };

    render() {
        return (
            <main role="main">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h2>Entrar</h2>

                        <form className="mt-4" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="email" required placeholder="Endereço de e-mail" className="form-control"
                                    onChange={e => this.setState({ email: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password" required placeholder="Digite a Senha" className="form-control"
                                    onChange={e => this.setState({ password: e.target.value })}
                                />
                            </div>

                            {this.props.auth.errorLogin &&
                                <div class="alert alert-danger" role="alert">
                                    {this.props.auth.message}
                                </div>
                            }

                            <button type="submit" className="btn btn-primary btn-block">Entrar</button>

                            <hr />

                            <Link to="/registrar">Registrar nova conta</Link>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { login })(Login)