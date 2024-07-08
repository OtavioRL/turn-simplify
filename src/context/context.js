import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [character, setCharacter] = useState(undefined);

  return (
    <MyContext.Provider value={{ character, setCharacter }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
