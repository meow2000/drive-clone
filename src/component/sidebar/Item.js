//import {Label} from '@material-ui/icons'
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../CSS/SidebarItem.css';
import FileView from '../file/FileView';
import UserService from '../authHandler/user.service';

const SideBarItem = ({ arrow, icon, label, option }) => {

    const reRenderOnClick = () => {
        if(option === "shareFile") {
            UserService.listFileShare().then(res => {
                console.log(res);
                
            });
        }
    }

    return (
        <div className="sideBar__itemContainer" onClick={reRenderOnClick}>
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
