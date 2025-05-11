import { ReactNode } from 'react';

import { Link } from '@tanstack/react-router';

import * as styles from './sidebar.css';

interface NavItemProps {
  to: string;
  icon: ReactNode;
  label?: string;
  isActive: boolean;
  isOpen: boolean;
}

export function NavItem({ to, icon, label, isActive, isOpen }: NavItemProps) {
  return (
    <Link to={to} className={styles.navItem({ active: isActive })}>
      <div className={styles.navItemIcon({ isOpen })}>{icon}</div>
      {label && <span className={styles.label}>{label}</span>}
    </Link>
  );
}
