import AppLayout from '@cloudscape-design/components/app-layout';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

function App() {
  return (
    <AppLayout
      maxContentWidth={Number.MAX_VALUE}
      navigation={<Navigation />}
      toolsHide
      content={<Outlet />}
    />
  );
}

export default App;
