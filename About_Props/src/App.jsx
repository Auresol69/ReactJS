import Student from "./Student.jsx"
import Button from "./Button.jsx"
import ProfilePicture from "./ProfilePicture.jsx"

function App() {

  return (
    <>
    <Student name="Spongebob" age={20} isStudent={true}/>
    <Student age={42} isStudent={false}/>
    <Student name="Roy" age={20} isStudent={true}/>
    <Student />    
      <br />
      <Button />  
      <br />
      <ProfilePicture />
    </>
  )
}

export default App
