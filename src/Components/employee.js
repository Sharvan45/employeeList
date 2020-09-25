import React from "react";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';
import * as ACTIONS from "../store/actions/action";

class Employee extends React.Component {
    componentDidMount() {
        if (this.props.isLoggedIn)
            this.props.fetchEmployess();
    }

    render() {
        return (
            <div className="employee" >
                <div className="header">
                    <Button className="logoutButton" bsSize="large" onClick={this.props.logout}>
                        Logout
                    </Button>
                </div>
                {this.props.employeeList && this.props.employeeList.user.length > 0 &&
                    <table className="table1">
                        <tr key={"header"}>
                            {Object.keys(this.props.employeeList.user[0]).map((key) => (
                                <th>{key}</th>
                            ))}
                        </tr>
                        {this.props.employeeList && this.props.employeeList.user.length > 0 &&
                            this.props.employeeList.user.map((item) => (
                                <tr key={item.id}>
                                    {Object.values(item).map((val) => (
                                        <td>{val}</td>
                                    ))}
                                </tr>
                            ))}
                    </table>}
            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.isLoggedIn,
        employeeList: state.employeeList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchEmployess: () => dispatch(ACTIONS.fetchEmployess()),
        logout: () => dispatch(ACTIONS.logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Employee);