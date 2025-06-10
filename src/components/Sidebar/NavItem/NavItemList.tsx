import { ReactNode } from 'react';

import * as Tooltip from '@radix-ui/react-tooltip';
import { Link, useLocation } from '@tanstack/react-router';

import * as styles from './NavItemList.css';

interface NavItemProps {
  to: string;
  icon: ReactNode;
  label: string;
  isOpen: boolean;
}

export function NavItem({ to, icon, label, isOpen }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  const linkContent = (
    <Link to={to} className={styles.navItem({ active: isActive })}>
      <div className={styles.navItemIcon({ isOpen })}>{icon}</div>
      {isOpen && <span className={styles.label}>{label}</span>}
    </Link>
  );

  if (!isOpen) {
    return (
      <Tooltip.Root delayDuration={0}>
        <Tooltip.Trigger asChild>{linkContent}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={styles.tooltipContent}
            side='right'
            sideOffset={0}
          >
            {label}
            <Tooltip.Arrow className={styles.tooltipArrowBorder} />
            <Tooltip.Arrow className={styles.tooltipArrowFill} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    );
  }

  return linkContent;
}

interface NavItemListProps {
  items: Array<{
    to: string;
    icon: ReactNode;
    label: string;
  }>;
  isOpen: boolean;
}

export function NavItemList({ items, isOpen }: NavItemListProps) {
  return (
    <Tooltip.Provider>
      {items.map(item => (
        <NavItem
          key={item.label}
          to={item.to}
          icon={item.icon}
          label={item.label}
          isOpen={isOpen}
        />
      ))}
    </Tooltip.Provider>
  );
}
