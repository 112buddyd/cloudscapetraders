import { Dispatch, SetStateAction, createContext } from 'react';

interface IAgentContext {
  agentData: unknown;
  setAgentData: Dispatch<SetStateAction<unknown>>;
}

const AgentContext = createContext({
  agentData: {},
  setAgentData: () => {},
} as IAgentContext);

export default AgentContext;
