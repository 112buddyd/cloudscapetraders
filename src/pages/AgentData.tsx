import { useContext, useEffect } from 'react';
import TokenContext from '../context/TokenContext';
import Header from '@cloudscape-design/components/header';
import Box from '@cloudscape-design/components/box';
import Spinner from '@cloudscape-design/components/spinner';
import Alert from '@cloudscape-design/components/alert';
import useApi from '../utils/useApi';
import { Button } from '@cloudscape-design/components';

function AgentData() {
  const { token } = useContext(TokenContext);
  const { data, loading, error, api } = useApi({
    url: '/my/agent',
    token,
  });

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <Header
        variant="h2"
        actions={<Button variant="icon" iconName="refresh" onClick={api} />}
      >
        Agent Data
      </Header>
      {!loading && error && (
        <Alert type="error" dismissible header="Unable to load Agent Data">
          {JSON.stringify(error, null, 2)}
        </Alert>
      )}
      {!loading ? (
        <Box variant="pre">{JSON.stringify(data, null, 2)}</Box>
      ) : (
        <Spinner size="large" />
      )}
    </>
  );
}

export default AgentData;
