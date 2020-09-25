import React from "react";
import { Button, FormGroup, FormControl, FormLabel, FormCheck, Alert } from "react-bootstrap";
import { connect } from 'react-redux';
import history from "./../utils/history";

import * as ACTIONS from "../store/actions/action";

class Login extends React.Component {
    constructor(props) {
        super(props);
        let mail = window.localStorage.getItem("email");
        let pwd = window.localStorage.getItem("pwd");
        this.state = {
            email: mail ? mail : "",
            password: pwd ? pwd.split(",").reverse().join("") : ""
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.isLoggedIn) {
            if (document.getElementById("checkBox1").checked) {
                window.localStorage.setItem("email", this.state.email);
                window.localStorage.setItem("pwd", this.encrypt(this.state.password));
            }
            history.push("/EmployeeList");
        }
    }

    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    };

    setEmail = (value) => {
        this.setState({ email: value });
    };

    setPassword = (value) => {
        this.setState({ password: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login({
            username: this.state.email,
            password: this.state.password
        });
    }

    encrypt = (value) =>{
        return value.split("").reverse().join(",");
    }

    render() {
        return (
            <div className="Login" >
                <div className="box">
                    {
                        this.props.message ?
                            <Alert variant={'danger'}>{this.props.message}</Alert>
                            : <Alert></Alert>}
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="email" bsSize="large">
                            <b>
                                <FormLabel>Username</FormLabel></b>(Case Sensitive)
                            <br />
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={e => this.setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <b>
                                <FormLabel>Password</FormLabel>
                            </b>
                            <br />
                            <FormControl
                                value={this.state.password}
                                onChange={e => this.setPassword(e.target.value)}
                                type="password"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormCheck type="checkbox" label="Remember me on this Computer" id="checkBox1" />
                        </FormGroup>
                        <Button block bsSize="large" variant="primary" disabled={!this.validateForm()} type="submit">
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        )
    };
}
function mapStateToProps(state) {
    return {
        isLoggedIn: state.isLoggedIn,
        message: state.errorMessage
    }
}
function mapDispatchToProps(dispatch) {
    return {
        login: (details) => dispatch(ACTIONS.login(details))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);