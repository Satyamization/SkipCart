import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: '',
            success: '',
            message: ''
        }
 
        this.handleChange = this.handleChange.bind(this)
        this.submitChange = this.submitChange.bind(this)
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }
    submitChange = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:5000/login', {
            user: this.state.user,
            password: this.state.password
        })
            .then((response) => {
                console.log(response.data.message);
                this.setState({
                    message: response.data.message,
                    success: response.data.success
                })
            }, (error) => {
                console.log(error);
            });

    }
    render() {
        return (
            <div>
                <form method='POST' onSubmit={this.submitChange}>
                    <div class="login-page">
                        <div class="form">
                            <form class="login-form">
                                <input type="text" id="user" placeholder="username" value={this.state.user}
                                    onChange={this.handleChange}
                                    name='user' />
                                <input type="password" placeholder="password" onChange={this.handleChange}
                                    name='password'
                                    id='password'
                                    value={this.state.password} />

                                <button type="submit" name='submit' id='submit'>login</button>
                                <p class="message">Not registered? <button>Register</button></p>
                            </form>
                        </div>
                    </div>
                    <h4>{this.state.message}</h4>
                </form>
                {/* <Link to='/register'>
                    <h3 >New Here? Sign up now..</h3>
                </Link> */}
            </div>
        );
    }
}

export default Login;
