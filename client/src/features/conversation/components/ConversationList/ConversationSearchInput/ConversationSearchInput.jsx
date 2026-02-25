import styles from './ConversationSearchInput.module.scss';

const ConversationSearchInput = ({
  value,
  onChange,
  id = 'conversation-search-input',
}) => {
  return (
    <div className={styles.searchInputWrapper}>
      <label htmlFor={id}>
        <i
          className={`fi fi-rr-search ${styles.searchIcon}`}
          aria-hidden="true"
        ></i>
        <span className="srOnly">Search conversations</span>
      </label>
      <input
        aria-label="Search conversations"
        type="search"
        placeholder="Search"
        id={id}
        value={value}
        className={styles.input}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          className={styles.clearBtn}
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          <i className="fi fi-rr-cross-small" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default ConversationSearchInput;
