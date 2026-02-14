import { AuthLayout } from '@/shared/layouts';
import {
  ForgotPasswordPage,
  ResetPasswordPage,
  ResetPasswordSuccessPage,
  SignInPage,
  SignUpPage,
  VerifyEmailPage,
  VerifyEmailSuccessPage,
} from './pages';
import { Navigate } from 'react-router';

export const authRoutes = [
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="sign-in" replace />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
      {
        path: 'sign-in',
        element: <SignInPage />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: 'reset-password',
        element: <ResetPasswordPage />,
      },
      {
        path: 'reset-password/success',
        element: <ResetPasswordSuccessPage />,
      },
      {
        path: 'verify-email',
        element: <VerifyEmailPage />,
      },
      {
        path: 'verify-email/success',
        element: <VerifyEmailSuccessPage />,
      },
    ],
  },
];
