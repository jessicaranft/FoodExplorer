import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function AuthRoutes({ selectedTheme, setSelectedTheme }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<SignIn setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />}
      />
      <Route
        path="/register"
        element={<SignUp setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />}
      />
    </Routes>
  );
}