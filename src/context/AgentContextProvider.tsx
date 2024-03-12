import { ReactNode, useEffect, useState } from 'react';
import AgentContext from './AgentContext';

interface AgentContextProviderProps {
  children?: ReactNode;
}

function AgentContextProvider({ children }: AgentContextProviderProps) {
  const [agentData, setAgentData] = useState(
    JSON.parse(localStorage.getItem('SPACE_TRADER') || '{}') as unknown
  );

  useEffect(() => {
    localStorage.setItem('SPACE_TRADER', JSON.stringify(agentData));
  }, [agentData]);

  return (
    <AgentContext.Provider value={{ agentData, setAgentData }}>
      {children}
    </AgentContext.Provider>
  );
}

export default AgentContextProvider;
