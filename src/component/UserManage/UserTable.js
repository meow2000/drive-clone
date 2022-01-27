import React, { Component } from "react";
import { Table } from "react-bootstrap";

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

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }

    searchTitle() {
        
    }

    // const DataTable = () => {
    //     return product_data.map((res, i) => {
    //         return <StudentTableRow obj={res} key={i} />;
    //     });
    // };

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
                                <th>title</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {user_data.map((product, index) => (
                                    <td>{product.title}</td>
                                ))}
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}