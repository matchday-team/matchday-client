import { ReactNode } from 'react';

import { Link } from '@tanstack/react-router';

import * as styles from './NavItemList.css';

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

interface NavItemListProps {
  items: Array<{
    to: string;
    icon: ReactNode;
    label?: string;
    path: string;
  }>;
  isOpen: boolean;
  currentPath: string;
}

export function NavItemList({ items, isOpen, currentPath }: NavItemListProps) {
  return (
    <>
      {items.map(item => (
        <NavItem
          key={item.label}
          to={item.to}
          icon={item.icon}
          label={isOpen ? item.label : undefined}
          isActive={currentPath === item.path}
          isOpen={isOpen}
        />
      ))}
    </>
  );
}
