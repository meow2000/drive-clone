import React, { Component } from "react";
import { Table } from "react-bootstrap";
import AdminService from "../AuthHandler/admin.service";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, ButtonGroup } from 'react-bootstrap';
import UserTableRows from "./UserTableRows";
export default class UserTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_data: [],
            searchTitle: ''
        }
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
    }

    componentDidMount() {
        AdminService.getListUser().then((response) => {
            response.json().then(data => ({
                data: data,
                status: response.status
            })).then(res => {
                this.setState({ user_data: res.data })
                console.log(this.state.user_data)
                // localStorage.setItem("userName", res.data.name);
                // localStorage.setItem("email", res.data.email);
                // localStorage.setItem("used", res.data.storage);
                // localStorage.setItem("storage", res.data.plan.max_storage);
                // localStorage.setItem("role", res.data.role);
            })
        })
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }

    searchTitle() {
        
    }

    render() {
        const { user_data, searchTitle } = this.state;
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
                                <th>max storage</th>
                                <th>Cost</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {user_data.map((user, index) => (
                                <UserTableRows obj={user} key={index} plan_name={user.plan.name} plan_max_storage={user.plan.max_storage} cost={user.plan.cost}/>
                                // <tr key={user.id}>
                                //     <td>{user.name}</td>
                                //     <td>{user.enabled.toString()}</td>
                                //     <td>{user.role}</td>
                                //     <td>{user.plan.name}</td>
                                //     <td>{user.plan.max_storage}Kb</td>
                                //     <td>{user.plan.cost}</td>
                                //     <td>
                                //         <ButtonGroup>
                                //             <Button variant="primary">Edit</Button>{' '}
                                //             <Button variant="danger">Delete</Button>
                                //         </ButtonGroup>
                                //     </td>
                                // </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}