//import {Label} from '@material-ui/icons'
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../CSS/SidebarItem.css';

const SideBarItem = ({ arrow, icon, label }) => {
    return (
        <div className="sideBar__itemContainer">
            <div className="sidebar__arrow">
                {arrow && (<ArrowRightIcon/>)}
            </div>

            <div className="sidebar__item">
                {icon}
                <p>{label}</p>
            </div>
        </div>
    )
}

export default SideBarItem
