import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"

const Title = props => {
  const colors = ["#001f3f", "#39cccc"]

  const [isReversed, reverse] = useState(false)
  const [color, setColor] = useState(0)

  const styles = { color: colors[color] }
  const onClickHandle = event => {
    reverse(previousIsReversed => !previousIsReversed)
    setColor(1)
  }

  return (
    <h1 onClick={onClickHandle} style={styles}>
      {
        isReversed
          ? props.text.split("").reverse().join("")
          : props.text
      }
    </h1>
  )
}

ReactDOM.render(
  <div>
    <h2>Нажмите на строки</h2>
    <Title text="Строка #1"/>
    <Title text="Строка #2"/>
    <Title text="Строка #3"/>
  </div>,
  document.getElementById('root')
);
