import React, { useState } from "react";
  
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [name, setName] = useState("w");
    const [post, setPost]= useState({name:""})
  const [ID, setID]= useState(0);
  const [IDP,setIDP]= useState(0);
    return (
        <Context.Provider value={[name, setName]}>
            {children}
        </Context.Provider>
    );
};
