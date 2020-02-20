import React from "react";
import form from "./Form.css"

export default class Form extends React.Component{
    state={
        firstName:"",
        lastName: "",
        email:"",
        userName:"",
        password:""
    };
    change=e=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        // this.setState({
        //     firstName:"",
        //     lastName: "",
        //     email:"",
        //     userName:"",
        //     password:""
        // })
    }
    render(){
        return(
            <form>

                <h1 className="headding-main" >
                    Welcome to our React with Material UI application
                </h1>
                {/* <marquee  width="100%" direction="left" height="100px">
                Please Enter Required Data Below
                </marquee> */}
                
                First Name: 
                <br/>
                <input 
                className="page-background-color"
                name='firstName'
                placeholder= "First Name" 
                value={this.state.firstName}
                onChange={e=>this.change(e)} 
                />
                <br/>
                Last Name: 
                <br/>
                 <input 
                   className="page-background-color"
                 name='lastName'
                 placeholder= "last Name" 
                value={this.state.lastName}
                onChange={e=>this.change(e)}
                />
                <br/>
                Email: 
                <br/>
                 <input
                   className="page-background-color"
                 name='email'
                  placeholder= "Email" 
                value={this.state.email}
                onChange={e=>this.change(e)}
                />
                <br/>
                User Name:
                <br/> 
                 <input 
                   className="page-background-color"
                 name='userName'
                 placeholder= "User Name" 
                value={this.state.userName}
                onChange={e=>this.change(e)}
                />
                <br/>
                Password: 
                <br/>
                 <input
                   className="page-background-color"
                 name='password'
                  placeholder= "Password" 
                value={this.state.password}
                onChange={e=>this.change(e)}
                />
                <br/>
                <button onClick={e=> this.onSubmit(e)}>Save</button>
                <br/>
            </form>
        )
    }

}