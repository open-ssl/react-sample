import React from "react"
import ReactDOM from "react-dom"

const users = [
  { name: "Ivan", age: 25 },
  { name: "Isaak", age: 25 },
  { name: "Misha", age: 25 },
  { name: "Alex", age: 25 }
]

const User = props => {
  const { name, age } = props
  return <h3>{ name }, { age }</h3>
}

const Users = props => {
  const { users } = props

  return (
    <div>
      {
        users.map((user, i) => {
          return (
            <User
              key={user.name}
              name={user.name}
              age={user.age}
            />
          )
        })
      }
    </div>
  )
}

ReactDOM.render(
  <Users users={users} />,
  document.getElementById("root")
)
