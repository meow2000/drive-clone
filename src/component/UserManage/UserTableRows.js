import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import UserEdit from "./UserEdit";
import { Button, ButtonGroup } from 'react-bootstrap';
// import adminService from "../AuthHandler/admin.service";
import ConfirmDelete from './ConfirmDelete'

const UserTableRows = (props) => {
    const { id, name, role, enabled } = props.obj;
    const [open, setOpen] = React.useState(false);
    const handleOpenForm = () => {
        setOpen(true);
    }

    const handleCloseForm = () => {
        setOpen(false);
    }
    return (
        <tr key={id}>
            <td>{name}</td>
            <td>{enabled.toString()}</td>
            <td>{role}</td>
            <td>{props.plan_name}</td>
            <td>{props.cost}</td>
            <td className="button-group">
                <ButtonGroup>
                    <Button variant="primary" onClick={handleOpenForm}>Edit</Button>{' '}
                    <ConfirmDelete id={id} setData={props.setData} />
                </ButtonGroup>
                <UserEdit isOpen={open} handleCloseForm={handleCloseForm} id={id} setData={props.setData} />
            </td>
        </tr>
    );
};

export default UserTableRows;
