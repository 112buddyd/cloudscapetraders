import Button from '@cloudscape-design/components/button';
import Form from '@cloudscape-design/components/form';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { useContext, useState } from 'react';
import FormField from '@cloudscape-design/components/form-field';
import Input from '@cloudscape-design/components/input';
import Box from '@cloudscape-design/components/box';
import useApi from '../utils/useApi';
import TokenContext from '../context/TokenContext';

interface ILocation {}

function Location() {
  const [system, setSystem] = useState('');
  const [waypoint, setWaypoint] = useState('');
  const { token } = useContext(TokenContext);

  const { api, data, error, loading } = useApi<ILocation>({
    url: `systems/${system}/waypoints/${waypoint}`,
    token,
  });

  return (
    <SpaceBetween size="xs">
      <Header variant="h2">Get Location Info</Header>
      <Form
        actions={
          <SpaceBetween size="xs" direction="horizontal">
            <Button
              loading={loading}
              disabled={loading}
              variant="primary"
              onClick={api}
            >
              Lookup
            </Button>
          </SpaceBetween>
        }
        errorText={error}
      >
        <FormField label="System">
          <Input
            onChange={({ detail }) => setSystem(detail.value)}
            value={system}
          />
        </FormField>
        <FormField label="Waypoint">
          <Input
            onChange={({ detail }) => setWaypoint(detail.value)}
            value={waypoint}
          />
        </FormField>
      </Form>
      {!loading && data && (
        <Box variant="pre">{JSON.stringify(data, null, 2)}</Box>
      )}
    </SpaceBetween>
  );
}

export default Location;
