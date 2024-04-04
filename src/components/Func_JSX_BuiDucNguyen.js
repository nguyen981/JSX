import React from 'react'

export default function Func_JSX_BuiDucNguyen(props) {
    const user = {
        name:"Bui Duc Nguyen",
        age:20
    }
  return (
    <div>
      <h2>Function Component Demo</h2>
      <h3>
        wellcome to, {users.name} - {users.age}
      </h3>
      <hr/>
      <h3>Props:
        <br/> FullName: {props.fullName}
        <br/> Age: {props.age}

      </h3>
    </div>
  )
}
