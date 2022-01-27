import React, { Component } from "react";
import { Table } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

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
        const { user_data } = this.state;
        return (
            <div className="list row">
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