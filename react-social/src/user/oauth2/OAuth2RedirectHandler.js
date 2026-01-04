import React, { Component } from 'react';
import { ACCESS_TOKEN } from '../../constants';
import { Redirect } from 'react-router-dom'

class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    componentDidMount() {
        const token = this.getUrlParameter('token');
        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            // 如果你在 App.js 里传了加载用户的方法，请在这里调用它
            if (this.props.onLogin) {
                this.props.onLogin();
            }
        }
    }

    render() {        
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');

        if(token) {
            // localStorage.setItem(ACCESS_TOKEN, token);   
            return <Redirect to={{
                pathname: "/profile",
                state: { from: this.props.location }
            }}/>; 
        } else {
            return <Redirect to={{
                pathname: "/login",
                state: { 
                    from: this.props.location,
                    error: error 
                }
            }}/>; 
        }
    }
}

export default OAuth2RedirectHandler;