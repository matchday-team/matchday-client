import { ReactNode } from 'react';

import { Link } from '@tanstack/react-router';

import { CheckRightIcon } from '@/assets/icons';

import * as styles from './FooterItemList.css';

interface FooterItemProps {
  to: string;
  icon: ReactNode;
  label?: string;
  showArrow?: boolean;
  isOpen: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function FooterItem({
  to,
  icon,
  label,
  showArrow,
  isOpen,
  disabled,
  onClick,
}: FooterItemProps) {
  return (
    <Link to={to} className={styles.footerItem({ disabled })} onClick={onClick}>
      <div className={styles.footerItemIcon({ isOpen })}>
        {icon}
        {label && <span className={styles.label}>{label}</span>}
      </div>
      {showArrow && <CheckRightIcon className={styles.footerRightIcon} />}
    </Link>
  );
}

interface FooterItemListProps {
  items: Array<{
    to: string;
    icon: ReactNode;
    label?: string;
    disabled?: boolean;
    onClick?: () => void;
  }>;
  isOpen: boolean;
}

export function FooterItemList({ items, isOpen }: FooterItemListProps) {
  return (
    <>
      {items.map(item => (
        <FooterItem
          key={item.label}
          to={item.to}
          icon={item.icon}
          label={isOpen ? item.label : undefined}
          showArrow={isOpen}
          isOpen={isOpen}
          disabled={item.disabled}
          onClick={item.onClick}
        />
      ))}
    </>
  );
}
