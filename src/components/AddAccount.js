
import React from 'react'


class AddAccount extends React.Component {

    state = {
        first_name : "",
        last_name : "",
        email : "",
    };

    add = (e) =>{
        e.preventDefault();
        if (this.state.first_name === "" || this.state.email === "" || this.state.last_name === "") {
          alert("ALL the fields are mandatory!");
          return;
        }
        this.props.AccountHandler(this.state);
        this.setState({ first_name: "", email: "" , last_name: ""});
    } 
    render(){
        return(
            <div className='ui main'>
                <h2 >Add Lead</h2>
                <form className = 'ui form' onSubmit={this.add}>
                    <div className = 'field'>
                        <lable>First Name</lable>
                        
                        <input type="text"
              name="first_name"
              placeholder="First Name"
              value={this.state.first_name}
              onChange={(e) => this.setState({ first_name: e.target.value })}></input>
                    </div>

                    <div className = 'field'>
                        <lable>Last Name</lable>
                        
                        <input type="text"
              name="last_name"
              placeholder="Last Name"
              value={this.state.last_name}
              onChange={(e) => this.setState({ last_name: e.target.value })}></input>
                    </div>

                    <div className = 'field'>
                        <lable>EmailId</lable>
                        
                        <input type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}></input>
                    </div>
                    <button className = "ui button blue" >Add ontact</button>
                </form>
                
            </div>
        );
    }
}
export default AddAccount;