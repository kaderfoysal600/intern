import React, { createContext, useState } from "react";
export const UserContext = createContext();
export const UserProvider = (props) => {
    const [users, setUsers] = useState([
        { id: 1, name: "kader", email:"kaderf113@gmail.com" },
        { id: 2, name: "foysal", email:"1743CSE00600@gmail.com"},
        { id: 2, name: "abdul", email:"akfoysal@gmail.com"},

    ]);
    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    )


}