import Button from '@cloudscape-design/components/button';
import Form from '@cloudscape-design/components/form';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { useContext, useEffect, useState } from 'react';
import AgentContext from '../context/AgentContext';
import { useNavigate } from 'react-router-dom';
import Container from '@cloudscape-design/components/container';
import FormField from '@cloudscape-design/components/form-field';
import Input from '@cloudscape-design/components/input';
import useApi from '../utils/useApi';
import TokenContext from '../context/TokenContext';

interface IData {
  data: {
    token: string;
  }
}

function Register() {
  const [symbol, setSymbol] = useState('');
  const { setAgentData } = useContext(AgentContext);
  const { setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const { api, loading, error, data } = useApi<IData>({
    url: 'register',
    config: {
      method: 'POST',
      body: JSON.stringify({
        symbol: symbol,
        faction: 'COSMIC',
      }),
    },
  });

  useEffect(() => {
    if (!data) return;
    setAgentData(data.data);
    setToken(data.data.token);
    navigate('/');
  }, [data]);

  return (
    <Container
      header={<Header variant="h2">Register a new Space Trader</Header>}
    >
      <Form
        actions={
          <Button
            loading={loading}
            disabled={loading}
            variant="primary"
            onClick={api}
          >
            Register
          </Button>
        }
        errorText={error}
      >
        <SpaceBetween size="xs">
          <FormField label="Symbol" description="Your callsign!">
            <Input
              onChange={({ detail }) => setSymbol(detail.value)}
              value={symbol}
            />
          </FormField>
          <FormField label="Faction" description="Other options coming soon!">
            <Input disabled value={'COSMIC'} />
          </FormField>
        </SpaceBetween>
      </Form>
    </Container>
  );
}

export default Register;
