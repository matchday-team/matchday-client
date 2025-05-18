import { useEffect } from 'react';

import { usePageTitleStore } from '@/stores';

export const usePageTitle = (title: string) => {
  const { setTitle } = usePageTitleStore();
  useEffect(() => {
    setTitle(title);

    return () => {
      setTitle('');
    };
  }, [title]);
};
