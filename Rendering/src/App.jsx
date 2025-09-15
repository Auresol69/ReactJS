// conditional rendering = allows you to control what gets rendered
//                         in your application based on certain conditions
//                         (show, hide, or change components)

import UserGreeting from "./UserGreeting"
import List from "./List"
import Counter from "./Counter";
import MyComponentOnChange from "./MyComponentOnChange";
import ColorPicker from "./ColorPicker";
import Updater_Function from "./Updater_Function";
import Update_Object_In_State from "./Update_Object_In_State";
import Update_Array_In_State from "./Update_Array_In_State";
import Update_Array_Of_Object_In_State from "./Update_Array_Of_Object_In_State";

function App() {


    const fruits = [{id: 1,name: "apple", calories: 95},
                    {id: 2,name: "orange", calories: 45},
                    {id: 3,name: "banana", calories: 105},
                    {id: 4,name: "coconut", calories:159}];

  return (
    <>
      <UserGreeting isLoggedIn={true} />
      <hr />
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}{/* Components always True */}
      <hr />
      <Counter />
      <hr />
      <MyComponentOnChange />
      <hr />
      <ColorPicker />
      <hr />
      <Updater_Function />
      <hr />
      <Update_Object_In_State />
      <hr />
      <Update_Array_In_State />
      <hr />
      <Update_Array_Of_Object_In_State />
    </>)
}

export default App
