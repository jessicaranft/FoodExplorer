import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import { UserRoutes } from './user.routes';
import { AdminRoutes } from './admin.routes';
import { AuthRoutes } from './auth.routes';

export function Routes({ selectedTheme, setSelectedTheme }) {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {
        user ? (user.isAdmin ? 
          <AdminRoutes
            setSelectedTheme={setSelectedTheme}
            selectedTheme={selectedTheme}
          />
           : 
          <UserRoutes
            setSelectedTheme={setSelectedTheme}
            selectedTheme={selectedTheme}
          />
          ) : 
          <AuthRoutes
            setSelectedTheme={setSelectedTheme}
            selectedTheme={selectedTheme}
          />
        }
    </BrowserRouter>
  );
}