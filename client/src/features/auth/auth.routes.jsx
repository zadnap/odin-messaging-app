import { AuthLayout } from '@/shared/layouts';
import { LoginPage, RegisterPage } from './pages';
import { Navigate } from 'react-router';

export const authRoutes = [
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
];
