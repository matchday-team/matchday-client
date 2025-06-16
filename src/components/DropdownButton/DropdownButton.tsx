import { ReactNode, useEffect, useRef, useState } from 'react';

import * as styles from './DropdownButton.css';

interface DropdownButtonProps {
  children: ReactNode;
  buttonContent: ReactNode;
  className?: string;
  disabled?: boolean;
}

export const DropdownButton = ({
  children,
  buttonContent,
  className = '',
  disabled = false,
}: DropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        type='button'
        className={`${styles.dropdownButton} ${className}`}
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        {buttonContent}
        <span className={styles.chevron}>▼</span>
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu} role='menu'>
          {children}
        </div>
      )}
    </div>
  );
};
