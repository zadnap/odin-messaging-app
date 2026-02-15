import { Outlet } from 'react-router';
import styles from './ConversationLayout.module.scss';
import { ConversationList } from '../../components';

const ConversationLayout = () => {
  return (
    <div className={styles.conversationLayout}>
      <ConversationList />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default ConversationLayout;
