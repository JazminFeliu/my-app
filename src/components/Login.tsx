import React from "react";
import { AuthService } from "../services/AuthService";



interface LoginProps {
    authService: AuthService
}

interface LoginState {
    userName: string,
    password: string,
    loginAttented: boolean,
    loginSuccesfull: boolean
}

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component<LoginProps, LoginState> {

    state: LoginState = {
        userName: '',
        password: '',
        loginAttented: false,
        loginSuccesfull: false
    }

    private setUserName(event: CustomEvent){
        this.setState({userName: event.target.value})
    }

    private setPassword(event: CustomEvent){
        this.setState({password: event.target.value})
    }

    private async handleSuubmit(event:SyntheticEvent){
        event.preventDefault();
        this.setState({loginAttented:true})
        const result = await this.props.authService.login(
            this.state.userName,
            this.state.password
        )
        if(result){
            console.log(result)
            this.setState({loginSuccesfull: true})
        }else{
            console.log('wrong login')
            this.setState(loginSuccesfull: false)
        }
    }

    render(){
        return (
            <div>
                <h2>Please login</h2>
                <form>
                    <input value={this.state.userName}/><br/>
                    <input value={this.state.password} type='password'/><br/>
                    <input type='submit' value='Login'/>
                </form>
            </div>
        )
    }
}