import Button from '@cloudscape-design/components/button';
import Form from '@cloudscape-design/components/form';
import Header from '@cloudscape-design/components/header';
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
  };
}

function Login() {
  const [userToken, setUserToken] = useState('');
  const { setAgentData } = useContext(AgentContext);
  const { setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const { api, loading, error, data } = useApi<IData>({
    url: 'my/agent',
    config: {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authentication: `Bearer ${userToken}`,
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
      header={<Header variant="h2">Log into an existing Space Trader</Header>}
    >
      <Form
        actions={
          <Button
            loading={loading}
            disabled={loading}
            variant="primary"
            onClick={api}
          >
            Login
          </Button>
        }
        errorText={error}
      >
        <FormField label="Symbol" description="Your callsign!">
          <Input
            onChange={({ detail }) => setUserToken(detail.value)}
            value={userToken}
          />
        </FormField>
      </Form>
    </Container>
  );
}

export default Login;
