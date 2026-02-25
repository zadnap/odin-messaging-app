import { useEffect, useState } from 'react';
import styles from './ConversationList.module.scss';
import ConversationSearchInput from './ConversationSearchInput/ConversationSearchInput';
import useDebounce from '@/shared/hooks/useDebounce';

const ConversationList = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    console.log(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <section className={styles.conversationList}>
      <ConversationSearchInput value={search} onChange={setSearch} />
    </section>
  );
};

export default ConversationList;
