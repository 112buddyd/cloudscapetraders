import { ReactNode, useEffect, useState } from 'react';
import TokenContext from './TokenContext';

interface TokenContextProviderProps {
  children?: ReactNode;
}

function TokenContextProvider({ children }: TokenContextProviderProps) {
  const [token, setToken] = useState(
    localStorage.getItem('SPACE_TRADER_TOKEN') || ''
  );

  useEffect(() => {
    localStorage.setItem('SPACE_TRADER_TOKEN', token);
  }, [token]);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export default TokenContextProvider;
