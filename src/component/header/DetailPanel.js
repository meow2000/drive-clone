import React, { Component } from 'react'
import "../CSS/DetailPanel.css"
import authService from '../authHandler/auth.service';

export default class DetailPanel extends Component {

    constructor(props) {
        super(props);
        this.SignOutOnClick = this.SignOutOnClick.bind(this);
    }

    SignOutOnClick() {
        authService.logout();
        window.location.reload();
    }

    render() {
        return (
            <div className='m-detail-panel' id='DetailPanel'>
                <div className="detail-panel__wrapper">
                    <div className="detail-panel__header">
                        <div className="detail-panel__header__img"></div>
                        <div className="detail-panel__header__name"><b>Truong Vu</b></div>
                        <div className="detail-panel__header__email">test@test</div>
                    </div>
                    <div className="detail-panel__footer">
                        <div className="detail-panel__sign-out" onClick={this.SignOutOnClick}>Sign out of all accounts</div>
                    </div>
                </div>
            </div>
        )
    }
}
