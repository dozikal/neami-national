import React from 'react';
import Toast from 'react-bootstrap/Toast';
import './LandingPage.css';

export default class LandingPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false
        }

        setTimeout(() => {
            this.setState({ show: true })
        }, 1500);
    }

    render() {
        return (
            <div className="landingpage-background animated slideInRight">
                <h1>
                    Welcome <span style={{ color: 'coral' }}>{this.props.username}</span>, your mental health is our priority.
                </h1>

                {this.showToast()}
            </div>
        )
    }

    showToast() {
        return (
            <Toast style={{ position: 'fixed', top: 10, right: 10 }} onClose={() => this.setState({ show: false })} show={this.state.show} delay={5000} autohide>
                <Toast.Header>
                    You are logged in as &nbsp;<span style={{ color: 'coral' }}>{' ' + this.props.username} </span>.&nbsp;&nbsp;&nbsp;
                </Toast.Header>
            </Toast>
        )
    }
}