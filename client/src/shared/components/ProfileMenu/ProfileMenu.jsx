import { useEffect, useRef, useState } from 'react';
import styles from './ProfileMenu.module.scss';
import { Link } from 'react-router';
import avatar from '@/features/conversation/assets/images/fallback-avatar.jpg';

const ProfileMenu = ({ expanded }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div className={styles.profileMenu} ref={ref}>
      <button
        className={`${styles.menuTrigger} ${expanded ? styles.expanded : ''}`}
        aria-label="Show profile actions"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup={'menu'}
        aria-expanded={open}
      >
        <img className={styles.avatar} src={avatar} alt="user's avatar" />
        <span className={styles.label}>@zadnap</span>
      </button>
      {open && (
        <div className={styles.menu} role="menu">
          <ul>
            <li>
              <Link className={styles.menuItem} to="/profile/zadnap">
                <i className="fi fi-rr-circle-user"></i>
                <span>View profile</span>
              </Link>
            </li>
            <li>
              <button className={styles.menuItem}>
                <i className="fi fi-rr-exit"></i>
                <span>Sign out</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
