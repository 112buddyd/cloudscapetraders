import App from './App';
import AgentData from './pages/AgentData';
import Register from './pages/Register';
import Location from './pages/Location';
import Login from './pages/Login';

export const routes = [
  {
    path: '/',
    element: <App />,
    label: 'Space Trader',
    children: [
      {
        path: '/login',
        element: <Login />,
        label: 'Login',
      },
      {
        path: '/register',
        element: <Register />,
        label: 'Register',
      },
      {
        path: '/agentdata',
        element: <AgentData />,
        label: 'AgentData',
      },
      {
        path: '/location',
        element: <Location />,
        label: 'Location Lookup',
      },
    ],
  },
];
