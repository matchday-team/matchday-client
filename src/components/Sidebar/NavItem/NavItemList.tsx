import { ReactNode } from 'react';

import { Link } from '@tanstack/react-router';

import * as styles from './NavItemList.css';

interface NavItemProps {
  to: string;
  icon: ReactNode;
  label?: string;
  isOpen: boolean;
}

export function NavItem({ to, icon, label, isOpen }: NavItemProps) {
  return (
    // TODO: match 기반으로 설계 다시해서 active 처리
    <Link to={to} className={styles.navItem({ active: false })}>
      <div className={styles.navItemIcon({ isOpen })}>{icon}</div>
      {label && <span className={styles.label}>{label}</span>}
    </Link>
  );
}

interface NavItemListProps {
  items: Array<{
    to: string;
    icon: ReactNode;
    label?: string;
  }>;
  isOpen: boolean;
}

export function NavItemList({ items, isOpen }: NavItemListProps) {
  return (
    <>
      {items.map(item => (
        <NavItem
          key={item.label}
          to={item.to}
          icon={item.icon}
          label={isOpen ? item.label : undefined}
          isOpen={isOpen}
        />
      ))}
    </>
  );
}
