// conditional rendering = allows you to control what gets rendered
//                         in your application based on certain conditions
//                         (show, hide, or change components)

import UserGreeting from "./UserGreeting"
import List from "./List"

function App() {


    const fruits = [{id: 1,name: "apple", calories: 95},
                    {id: 2,name: "orange", calories: 45},
                    {id: 3,name: "banana", calories: 105},
                    {id: 4,name: "coconut", calories:159}];

  return (
    <>
      <UserGreeting isLoggedIn={false} />
      <br />
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}{/* Components always True */}
    </>)
}

export default App
