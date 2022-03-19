// при каждом вызове компонента React создает новый виртуальный DOM
// и сравнивает его с предыдущим чтобы не обновлять весь реальный DOM.

// Функция memo возвращает оптимизированный компонент, который будет вызываться только в том случае,
// если хотя бы один проп этого компонента изменился.

import React, { useState, memo } from "react"
import ReactDOM from "react-dom"
import "./index.css"

const Title = props => {
  console.log(`Компонент со строкой: ${props.text} вызвался.`)

  return (
    <h1>
      {props.text}
    </h1>
  )
}


const MemoizedComponent = memo(Title)

const Wrapper = () => {
  const [isReversed, reverse] = useState(false)
  const text = "Нажмите сюда"

  const onClickHandle = () => {
    reverse(previousIsReversed => !previousIsReversed)
  }

  return (
    <div>
      <h2 onClick={onClickHandle}>
        {
          isReversed
            ? text.split("").reverse().join("")
            : text
        }
      </h2>
      <MemoizedComponent text="Строка #1"/>
      <MemoizedComponent text="Строка #2"/>
      <Title text="Строка #3"/>
    </div>
  )
}

ReactDOM.render(
  <Wrapper/>,
  document.getElementById('root')
);
