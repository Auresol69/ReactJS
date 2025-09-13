// props = read-only that are shared between components.
//         A parent component can send data to a child component.
//         <Component key-value>

// propTypes = a mechanism that ensures that the passed value
//             is of the correct datatype.
//             age: PropTypes.number

import Student from "./Student.jsx"

function App() {

  return (
    <>
    <Student name="Spongebob" age="30" isStudent={true}/>
    <Student name="Patrick" age={42} isStudent={false}/>
    </>
  )
}

export default App
