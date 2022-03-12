import React, { createContext, useContext } from "react"
import ReactDOM from "react-dom"

// создали привязку к контексту
const contextA = createContext()
const contextB = createContext()
const contextC = createContext()

// определили компонент в котором решили использовать несколько контекстов сразу
const ChildComponent = () => {
  const contextAValue = useContext(contextA)
  const contextBValue = useContext(contextB)
  const contextCValue = useContext(contextC)

  return (
    <div>{contextAValue.color}-{contextBValue.color}-{contextCValue.color}</div>
  )
}

const ParentComponent = () => {
  // рендерим страничку передавая значения из контекстов дочернему компоненту
  return (
    <contextA.Provider value={{ color: "red" }}>
      <contextB.Provider value={{ color: "green" }}>
        <contextC.Provider value={{ color: "blue" }}>
          <ChildComponent/>
        </contextC.Provider>
      </contextB.Provider>
    </contextA.Provider>
  )
}

ReactDOM.render(
  <ParentComponent/>,
  document.getElementById('root')
);
