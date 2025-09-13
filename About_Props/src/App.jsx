// props = read-only that are shared between components.
//         A parent component can send data to a child component.
//         <Component key-value>

import Student from "./Student.jsx"

function App() {

  return (
    <>
    <Student name="Spongebob" age={20} isStudent={true}/>
    <Student age={42} isStudent={false}/>
    <Student name="Roy" age={20} isStudent={true}/>
    <Student />    
    </>
  )
}

export default App
