import React, { Component } from 'react'
import "../Styles/DetailPanel.css"
import authService from '../AuthHandler/auth.service';

export default class DetailPanel extends Component {

    constructor(props) {
        super(props);
        this.SignOutOnClick = this.SignOutOnClick.bind(this);
        this.getReadableFileSizeString = this.getReadableFileSizeString.bind(this);
        this.state = {
            userName: localStorage.getItem('userName'),
            used: localStorage.getItem('used'),
            storage: localStorage.getItem('storage')
        };
    }

    getReadableFileSizeString(fileSizeInBytes) {
        let i = -1;
        const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    };

    SignOutOnClick() {
        authService.logout();
        window.location.reload();
    }

    render() {
        const { userName, used, storage } = this.state;
        return (
            <div className='m-detail-panel' id='DetailPanel'>
                <div className="detail-panel__wrapper">
                    <div className="detail-panel__header">
                        <div className="detail-panel__header__img"></div>
                        <div className="detail-panel__header__name"><b>{userName}</b></div>
                        <div className="detail-panel__header__email">{this.getReadableFileSizeString(used)}/{this.getReadableFileSizeString(storage)}</div>
                    </div>
                    <div className="detail-panel__footer">
                        <div className="detail-panel__sign-out" onClick={this.SignOutOnClick}>Sign out of all accounts</div>
                    </div>
                </div>
            </div>
        )
    }
}
