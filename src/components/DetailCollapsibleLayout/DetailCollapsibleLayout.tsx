import * as styles from './DetailCollapsibleLayout.css';

export const DetailCollapsibleLayout = ({
  isOpen,
  defaultChildren,
  detailChildren,
}: {
  isOpen: boolean;
  defaultChildren: React.ReactNode;
  detailChildren: React.ReactNode;
}) => {
  return (
    <div className={styles.collapsibleContainer}>
      <div className={styles.defaultContainer}>{defaultChildren}</div>
      {isOpen && <div className={styles.detailContainer}>{detailChildren}</div>}
    </div>
  );
};
