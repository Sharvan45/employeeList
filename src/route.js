import React, { Component } from 'react';

import ProtectedRoute from './Components/protectedroute';

import Login from "./Components/login";
import { Router, Route, Switch, Redirect } from 'react-router';
import UnauthRedirect from './Components/unauthredirect';
import { connect } from 'react-redux';
import * as ACTIONS from './store/actions/action';
import history from "./utils/history"

import Employee from './Components/employee';


const PrivateRoute = ({ component: Component, auth }) => (
    <Route render={props => auth === true ?
        <Component auth={auth} {...props} /> :
        <Redirect to={{ pathname: '/login' }} />
    }
    />
)

class Routes extends Component {
    render() {
        const auth = this.props.isLoggedIn;
        return (
            <div>
                <Router history={history}>
                    <Switch>               
                        <Route path='/redirect' component={UnauthRedirect} />
                        <Route exact path='/login' render={() => <Login />} />
                        <PrivateRoute  exact path='/EmployeeList' auth={auth} component={Employee} />
                        <Route  path='/' render={() => <Login />} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login_success: () => dispatch(ACTIONS.login()),
        logout_success: () => dispatch(ACTIONS.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);