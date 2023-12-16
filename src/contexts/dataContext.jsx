import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
};

export { useData, DataProvider };
