import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from 'react-bootstrap';
import adminService from "../AuthHandler/admin.service";
const UserTableRows = (props) => {
    const { id, name, role, enabled} = props.obj;
    const deleteUser = () => {
        adminService.deleteUser(id).then(res => {
            debugger
        })
    }

    return (
        <tr key={id}>
            <td>{name}</td>
            <td>{enabled.toString()}</td>
            <td>{role}</td>
            <td>{props.plan_name}</td>
            <td>{props.plan_max_storage}Kb</td>
            <td>{props.cost}</td>
            <td>
                <ButtonGroup>
                    <Button variant="primary">Edit</Button>{' '}
                    <Button variant="danger" onClick={deleteUser}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    );
};

export default UserTableRows;
