import { authRoutes } from '@/features/auth/auth.routes';
import App from './App';
import { ErrorPage } from '@/shared/pages';

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [...authRoutes],
  },
];
