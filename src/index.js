import React, { useReducer } from "react"
import ReactDOM from "react-dom"
import "./index.css"

const initialState = {
  login: "",
  password: ""
}

function reducer (state, action) {
  switch (action.type) {
    case "set-field-value":
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }

    default:
      throw new Error("Unknown action")
  }
}

const Form = () => {
  const [fields, dispatch] = useReducer(reducer, initialState)

  const onSubmit = event => {
    // Предотвращаем отправку формы по умолчанию
    event.preventDefault()

    console.log(fields)
  }

  const onSetValue = event => {
    dispatch({
      type: "set-field-value",
      payload: {
        name: event.target.name,
        value: event.target.value
      }
    })
  }

  return (
    <form onSubmit={onSubmit} >
      <input
        value={fields.login}
        onChange={onSetValue}
        name="login"
        type="text"
        placeholder="Введите логин"
      />
      <input
        value={fields.password}
        onChange={onSetValue}
        name="password"
        type="password"
        placeholder="Введите пароль"
      />
      <button>Войти</button>
    </form>
  )
}

ReactDOM.render(
  <Form />,
  document.getElementById("root")
)
