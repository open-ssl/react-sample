import React, { useRef } from "react"
import ReactDOM from "react-dom"
import "./index.css"

const TestComponent = () => {
  const inputRef = useRef()

  const onClick = () => {
    inputRef.current.focus()
    inputRef.current.select()
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={onClick}>Нажмите для выделения текста</button>
    </div>
  )
}

ReactDOM.render(
  <TestComponent/>,
  document.getElementById('root')
);
