import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [character, setCharacter] = useState("");
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState("");

  return (
    <MyContext.Provider value={{ 
        character, 
        setCharacter, 
        characters, 
        setCharacters,
        selectedCharacter,
        setSelectedCharacter 
      }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
