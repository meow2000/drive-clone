import React, { Component } from 'react'
import "../CSS/DetailPanel.css"
import authService from '../authHandler/auth.service';

export default class DetailPanel extends Component {

    constructor(props) {
        super(props);
        this.SignOutOnClick = this.SignOutOnClick.bind(this);

        this.state = {
            userName: localStorage.getItem('userName'),
            used: localStorage.getItem('used'),
            storage: localStorage.getItem('storage')
        };
    }


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
                        <div className="detail-panel__header__email">{used}/{storage}Kb</div>
                    </div>
                    <div className="detail-panel__footer">
                        <div className="detail-panel__sign-out" onClick={this.SignOutOnClick}>Sign out of all accounts</div>
                    </div>
                </div>
            </div>
        )
    }
}
