import { MainLayout } from '@/shared/layouts';
import { ConversationPage, WelcomePage } from './pages';
import { ConversationLayout } from './layouts';

export const conversationRoutes = [
  {
    path: 'conversations',
    element: <MainLayout />,
    children: [
      {
        element: <ConversationLayout />,
        children: [
          {
            index: true,
            element: <WelcomePage />,
          },
          {
            path: ':id',
            element: <ConversationPage />,
          },
        ],
      },
    ],
  },
];
