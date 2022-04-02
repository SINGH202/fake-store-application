import React from "react";
import { AuthContext } from "../context/AuthContextProvider";

const Example = () => {
  const {name} = React.useContext(AuthContext);
  console.log(name);
  return  <h1>Hi this is {name} example </h1>;
     
};
export { Example };


// created context
// context.Provider
// wrapped APp with Context Provider
// provided a value in context provider
// useContext(relevet context)  to consume the value