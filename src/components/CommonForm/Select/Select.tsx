import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';

import { ChevronDownIcon } from '@/assets/icons';

import * as styles from './Select.css';

interface Option {
  value: string;
  label: string;
}

interface SelectProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> {
  options: Option[];
  value?: string;
  placeholder?: string;
  isError?: boolean;
  onChange?: (value: string) => void;
  name?: string;
}

export const Select = ({
  value,
  options,
  placeholder,
  isError = false,
  onChange,
  name,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);
  const displayText = selectedOption?.label || placeholder;
  const isPlaceholder = !selectedOption;

  // NOTE: 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
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

  // NOTE:키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) {
        switch (event.key) {
          case 'Enter':
            event.preventDefault();
            setIsOpen(true);
            break;
        }
        return;
      }

      switch (event.key) {
        case 'Escape':
          setIsOpen(false);
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          event.preventDefault();
          // NOTE: 키보드 네비게이션 로직 추가 가능
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    onChange?.(option.value);
    setIsOpen(false);
  };

  return (
    <div className={styles.selectContainer} ref={selectRef} {...props}>
      {name && <input type='hidden' name={name} value={value || ''} />}

      <div
        className={styles.selectButton({ isPlaceholder, isError })}
        onClick={handleToggle}
        role='combobox'
        aria-expanded={isOpen}
        aria-haspopup='listbox'
        aria-invalid={isError}
        tabIndex={0}
      >
        <span className={styles.selectText}>{displayText}</span>
        <ChevronDownIcon className={styles.chevronIcon({ isOpen })} />
      </div>

      {isOpen && (
        <div
          className={styles.optionsContainer}
          role='listbox'
          ref={optionsRef}
        >
          {options.map(option => (
            <div
              key={option.value}
              className={styles.option({
                isSelected: option.value === value,
              })}
              onClick={() => handleOptionClick(option)}
              role='option'
              aria-selected={option.value === value}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
