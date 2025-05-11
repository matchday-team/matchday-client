import { ReactNode } from 'react';

import { Link } from '@tanstack/react-router';

import { CheckRightIcon } from '@/assets/icons';

import * as styles from './sidebar.css';

interface FooterItemProps {
  to: string;
  icon: ReactNode;
  label?: string;
  showArrow?: boolean;
  isOpen: boolean;
}

export function FooterItem({
  to,
  icon,
  label,
  showArrow,
  isOpen,
}: FooterItemProps) {
  return (
    <Link to={to} className={styles.footerItem}>
      <div className={styles.footerItemIcon({ isOpen })}>
        {icon}
        {label && <span className={styles.label}>{label}</span>}
      </div>
      {showArrow && <CheckRightIcon className={styles.footerRightIcon} />}
    </Link>
  );
}
