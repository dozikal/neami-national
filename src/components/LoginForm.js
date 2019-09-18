import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './LoginForm.css';

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            validated: false,
            username: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            this.setState({ validated: true });
        }
        else {
            this.setState({ validated: true });
            this.props.setLoginStatus({ status: true, username: this.state.username });
        }
    };

    handleChange(event) {
        this.setState({ username: event.target.value });
    }

    render() {
        return (
            <Form className='loginform-card' noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                <Form.Group as={Col} md="4">
                    <Image className='shadow' src={require('../media/neami.jpg')} rounded fluid />
                </Form.Group>
                
                <Form.Group as={Col} md="4" controlId="usernameControl">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Username"
                        onChange={this.handleChange}
                        value={this.state.username}
                        pattern="^[a-zA-Z0-9_]*$"
                        className='shadow'
                    />
                    <Form.Control.Feedback type="invalid">Please enter a valid username. (no spaces or special characters allowed)</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="passwordControl">
                    <Form.Control
                        required
                        type="password"
                        pattern="^.{4,8}$"
                        placeholder="password"
                        className='shadow'
                    />
                    <Form.Control.Feedback type='invalid'>Password must be between 4 and 8 characters.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4">
                    <Button className='shadow' block type="submit">Login</Button>
                </Form.Group>
            </Form>
        );
    }
}
