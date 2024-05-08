import {createContext, useContext} from 'react';

const MainContext = createContext();

function MainProvider({children}) {
  return <MainContext.Provider>{children}</MainContext.Provider>;
}

function useMainContext() {
  const context = useContext(MainContext);
  return context;
}

export {useMainContext, MainProvider};
