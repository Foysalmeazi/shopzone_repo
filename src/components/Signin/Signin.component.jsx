import React, { Component } from 'react';
import './Sign_in.styles.scss';
import FormInput from '../FormInput/FormInput.component';
import Signinup from '../Signinup_button/Signinup.component';

class Signin extends Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
            email:'',
            password:''

        }
    }

    handleSubmit=(event)=>{
        event.preventDefault();

        this.setState({
            email:'',
            password:''
        })
    }

    handleChange=(event)=>{
        const {value,name}=event.target;

        this.setState({
            [name]:value
        })



    }
    
    render() {
        return (
            <div className="sign-in">
                <h3>Already have an account ?</h3>
                <span>Sign in with your gmail and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="Email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput type="password" name="password" label="Password" value={this.state.password} handleChange={this.handleChange} required/>
                    <Signinup type="submit">Sign in</Signinup>
                </form>
                
            </div>
        );
    }
}

export default Signin;
