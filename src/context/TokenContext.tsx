import { Dispatch, SetStateAction, createContext } from 'react';

interface ITokenContext {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const TokenContext = createContext({
  token: '',
  setToken: () => {},
} as ITokenContext);

export default TokenContext;
