import React from 'react';
import './LoginPage.css';
import Navbar from 'react-bootstrap/Navbar';
import LoginForm from '../../components/LoginForm';
import LandingPage from '../LandingPage/LandingPage';
import { createRequireFromPath } from 'module';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            username: '',
        }

        this.setLoginStatus = this.setLoginStatus.bind(this);
    }

    setLoginStatus(event) {
        this.setState({ isLoggedIn: event.status, username: event.username })
    }

    render() {
        return (
            <div className='loginpage-background'>
                {this.state.isLoggedIn ? <LandingPage username={this.state.username} /> : <LoginForm setLoginStatus={this.setLoginStatus} />}
            </div>
        );
    }
}