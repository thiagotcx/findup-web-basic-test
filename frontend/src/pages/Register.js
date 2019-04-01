import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { register, passwordFail } from '../store/ducks/auth'

class Register extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = this.state;

        if (confirmPassword !== password) return this.props.passwordFail('confirm')
        if (password.length < 8) return this.props.passwordFail('length')

        return this.props.register(name, email, password)
        
    };

    render() {
        return (
            <main role="main">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h2>Registrar</h2>

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text" required placeholder="Digite seu Nome" className="form-control"
                                    onChange={e => this.setState({ name: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="email" required placeholder="Digite um e-mail" className="form-control"
                                    onChange={e => this.setState({ email: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password" required placeholder="Digite uma Senha" className="form-control"
                                    onChange={e => this.setState({ password: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password" required placeholder="Confirme a Senha" className="form-control"
                                    onChange={e => this.setState({ confirmPassword: e.target.value })}
                                />
                            </div>

                            {this.props.auth.errorRegister && 
                                <div class="alert alert-danger" role="alert">
                                    {this.props.auth.message}
                                </div>
                            }

                            <button type="submit" className="btn btn-primary btn-block">Enviar</button>

                            <hr />

                            <Link to="/login">Já tenho uma conta!</Link>
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

export default connect(mapStateToProps, { register, passwordFail })(Register)