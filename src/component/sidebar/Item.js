//import {Label} from '@material-ui/icons'
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../CSS/SidebarItem.css';
import FileView from '../file/FileView';
import UserService from '../authHandler/user.service';
import { AirlineSeatIndividualSuiteSharp } from '@mui/icons-material';

const SideBarItem = ({ arrow, icon, label, option, setFile }) => {

    const _setFile = () => {
        if(option === "shareFile") {
            UserService.listFileShare().then(res => {
                setFile(res);            
            });
        } else if(option === "myFile") {
            UserService.getListFile().then(res => {
                setFile(res);
            })
        } else if(option === "bin") {
            UserService.listFileBin().then(res => {
                setFile(res);
            })
        }
    }

    return (
        <div className="sideBar__itemContainer" onClick={_setFile}>
            <div className="sidebar__arrow">
                {arrow && (<ArrowRightIcon/>)}
            </div>

            <div className="sidebar__item">
                {icon}
                <div className="sidebar__item__text">{label}</div>
            </div>
        </div>
    )
}

export default SideBarItem
