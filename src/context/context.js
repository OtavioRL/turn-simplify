import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [defaultChars, setDefaultChars] = useState([]);

  return (
    <MyContext.Provider value={{ defaultChars, setDefaultChars }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
