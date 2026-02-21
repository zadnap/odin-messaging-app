import styles from './AppSidebar.module.scss';
import { Link } from 'react-router';
import { useState } from 'react';
import { AppLogo, ProfileMenu } from '..';

const AppSidebar = () => {
  const sidebarItems = [
    {
      path: '/conversations',
      label: 'Inbox',
      iconRegular: 'fi fi-rr-messages',
      iconSolid: 'fi fi-sr-messages',
    },
    {
      path: '/people',
      label: 'People',
      iconRegular: 'fi fi-rr-users',
      iconSolid: 'fi fi-sr-users',
      badge: '9',
    },
    {
      path: '/settings',
      label: 'Settings',
      iconRegular: 'fi fi-rr-settings-sliders',
      iconSolid: 'fi fi-br-settings-sliders',
    },
  ];
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`${styles.appSidebar} ${expanded ? styles.expanded : ''}`}
      aria-expanded={expanded}
    >
      <header>
        <Link to="/" aria-label="Go to homepage" className={styles.appLogo}>
          <AppLogo />
        </Link>
        <button
          className={`${styles.sidebarAction} ${styles.expandButton}`}
          aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
          onClick={() => setExpanded((prev) => !prev)}
        >
          <i
            className={`fi fi-rr-angle-double-small-right ${styles.expandIcon}`}
          ></i>
          <i
            className={`fi fi-rr-angle-double-small-left ${styles.collapseIcon}`}
          ></i>
        </button>
      </header>
      <nav className={styles.navigation}>
        <ul>
          {sidebarItems.map((item) => (
            <li key={item.label}>
              <Link
                className={`${styles.sidebarAction} ${location.pathname === item.path ? styles.active : ''}`}
                to={item.path}
              >
                <i className={`${item.iconRegular} ${styles.regularIcon}`}></i>
                <i className={`${item.iconSolid} ${styles.solidIcon}`}></i>
                <span className={styles.label}>{item.label}</span>
                {item.badge && (
                  <span className={styles.badge}>
                    <span className={styles.badgeText}>{item.badge}</span>
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <footer>
        <ProfileMenu expanded={expanded} />
      </footer>
    </aside>
  );
};

export default AppSidebar;
