import SideNavigation from '@cloudscape-design/components/side-navigation';
import { useNavigate } from 'react-router-dom';
import { routes } from './routes';

function Navigation() {
  const navigate = useNavigate();
  return (
    <SideNavigation
      activeHref={window.location.pathname}
      header={{ href: '/', text: 'Space Trader' }}
      onFollow={(event) => {
        if (!event.detail.external) {
          event.preventDefault();
          navigate(event.detail.href);
        }
      }}
      items={routes.map((section) => ({
        type: section.children ? 'section' : 'link',
        text: section.label,
        href: section.path,
        items: section.children?.map((child) => ({
          type: 'link',
          text: child.label,
          href: child.path,
        })),
      }))}
    />
  );
}

export default Navigation;
