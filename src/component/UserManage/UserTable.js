import React, { Component } from "react";
import '../Styles/Table.css'
import { Table } from "react-bootstrap";
import AdminService from "../AuthHandler/admin.service";
// redux connect
import { connect } from "react-redux";
import { retrieveUsers } from "../../redux/actions/Admin-action";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, ButtonGroup } from 'react-bootstrap';
import UserTableRows from "./UserTableRows";
class UserTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTitle: '',
        }
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
        this.setData = this.setData.bind(this);
    }

    componentDidMount() {
        // AdminService.getListUser().then((response) => {
        //     response.json().then(data => ({
        //         data: data,
        //         status: response.status
        //     })).then(res => {
        //         this.setState({ user_data: res.data })
        //     })
        // })
        this.props.retrieveUsers();
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;
        this.setState({
            searchTitle: searchTitle
        });
    }

    setData(data) {
        this.setState({ user_data: data })
    }

    searchTitle() {
        AdminService.searchTitle(this.state.searchTitle).then(res => {
            this.setState({ user_data: res.data.data })
        })
    }

    render() {
        const { searchTitle } = this.state;
        const { users } = this.props;
        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchTitle}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="table-wrapper">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Enable</th>
                                <th>Role</th>
                                <th>Plan</th>
                                {/* <th>max storage</th> */}
                                <th>Cost</th>
                                <th></th>

                            </tr>
                        </thead>
                        {
                            users &&
                            <tbody>
                                {users.map((user, index) => (
                                    <UserTableRows obj={user} key={index} plan_name={user.plan.name} cost={user.plan.cost} setData={this.setData} />
                                ))}
                            </tbody>
                        }
                    </Table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.data,
    };
};

export default connect(mapStateToProps, { retrieveUsers })(UserTable);