import { ReactNode, useState } from 'react';

import * as styles from './GridListToggleView.css';

interface GridListToggleViewProps {
  render: (isGridView: boolean) => ReactNode;
}

export const GridListToggleView = ({ render }: GridListToggleViewProps) => {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className={styles.rootContainer}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsGridView(prev => !prev)}
      >
        {isGridView ? '리스트 보기' : '포메이션 보기'}
      </button>
      {render(isGridView)}
    </div>
  );
};
