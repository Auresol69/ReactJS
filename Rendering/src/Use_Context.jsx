// useContext() = React Hook that allows you to share values between multiple levels of components without passing props through each level

// PROVIDER COMPONENT
// 1. import { createContext } from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//    <Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//    import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);

// NOTE: Avoid prop drilling

import { useState, createContext } from 'react'
import Use_Context_Child from './Use_Context_Child';

export const UserContext = createContext();

function Use_Context() {
    const [user, setUser] = useState("RoyThai");
    const [age, setAge] = useState(20);

    return (<div style={{backgroundColor: "black", padding: "10px", color: "white"}}>
        hello {user} {age} from Use_ConText Components
        <UserContext.Provider value={{user: user, age: age}}>
            <Use_Context_Child />
        </UserContext.Provider>
    </div>);
}

export default Use_Context