import React from "react";

const UserTableRows = (props) => {
    const { title } = props.obj;

    return (
        <tr>
            <td>{title}</td>
        </tr>
    );
};

export default UserTableRows;
