import React, { Component } from 'react'

class Class_BuiDucNguyen extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:"Bui Duc Nguyen"
            class:"K@@CNT#"
        }
    }
    users = {
        name:"Bui Duc Nguyen",
        age:20
    }

    // ham xu ly sk
    handleChange = (event)=>{
        this.setState({
            fullName:"Chach Van Doanh  ", 
        })
    }
  render() {
    return (
      <div>
        <h2>Class component Demo</h2>
        {this.users.name} - {this.users.age}

        <hr/>
        <h3>info: {this.props.info}</h3>
        <h3>Time:{this.props.time}</h3>
        <hr/>
        <h3>State:
            FullNam: {this.state.fullName} -
            Class: {this.state.class}

        </h3>
        <button onClick={this.handleChange}>Change Name</button>
      </div>
    )
  }
}
export default Class_BuiDucNguyen;
