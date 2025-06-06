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
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<'top' | 'bottom'>(
    'bottom',
  );
  const [isPositionCalculated, setIsPositionCalculated] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const selectedOption = options.find(option => option.value === value);
  const displayText = selectedOption?.label || placeholder;
  const isPlaceholder = !selectedOption;
  useEffect(() => {
    optionRefs.current = optionRefs.current.slice(0, options.length);
  }, [options.length]);

  // NOTE: 드롭다운 위/아래 표시를 위한 위치 계산
  useEffect(() => {
    if (isOpen && selectRef.current) {
      const selectRect = selectRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const estimatedDropdownHeight = Math.min(
        options.length * styles.OPTION_ITEM_HEIGHT,
        styles.DROPDOWN_LIST_HEIGHT,
      );

      const spaceBelow = viewportHeight - selectRect.bottom;
      const spaceAbove = selectRect.top;

      if (spaceBelow >= estimatedDropdownHeight || spaceBelow >= spaceAbove) {
        setDropdownPosition('bottom');
      } else {
        setDropdownPosition('top');
      }

      setIsPositionCalculated(true);
    } else {
      setIsPositionCalculated(false);
    }
  }, [isOpen, options.length]);

  // NOTE: 드롭다운이 열릴 때 선택된 옵션에 포커스 설정
  useEffect(() => {
    if (isOpen) {
      const selectedIndex = options.findIndex(option => option.value === value);
      setFocusedIndex(Math.max(selectedIndex, 0));
      setIsKeyboardNavigation(false);
    } else {
      setFocusedIndex(-1);
      setIsKeyboardNavigation(false);
    }
  }, [isOpen, options, value]);

  // NOTE: 포커스된 옵션을 스크롤 영역에 표시
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && optionRefs.current[focusedIndex]) {
      optionRefs.current[focusedIndex]?.scrollIntoView({
        behavior: 'instant',
        block: 'nearest',
      });
    }
  }, [focusedIndex, isOpen]);

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

  // NOTE: 키보드 네비게이션
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) {
      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          setIsOpen(true);
          break;
        case 'ArrowDown':
          event.preventDefault();
          setIsOpen(true);
          break;
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        setIsOpen(false);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setIsKeyboardNavigation(true);
        setFocusedIndex(prev => (prev <= 0 ? options.length - 1 : prev - 1));
        break;
      case 'ArrowDown':
        event.preventDefault();
        setIsKeyboardNavigation(true);
        setFocusedIndex(prev => (prev >= options.length - 1 ? 0 : prev + 1));
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < options.length) {
          onChange?.(options[focusedIndex].value);
          setIsOpen(false);
          focusNextElement();
        }
        break;
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // NOTE: 포커스를 다음 focusable 요소로 이동
  const focusNextElement = () => {
    const focusableElements = document.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], input[type="email"], input[type="password"], input[type="tel"], input[type="url"], select, [tabindex]:not([tabindex="-1"])',
    );
    const currentIndex = Array.from(focusableElements).indexOf(
      selectRef.current as Element,
    );
    const nextElement = focusableElements[currentIndex + 1] as HTMLElement;

    if (nextElement) {
      nextElement.focus();
    } else {
      selectRef.current?.blur();
    }
  };

  const handleOptionClick = (option: Option) => {
    onChange?.(option.value);
    setIsOpen(false);
    focusNextElement();
  };

  const handleOptionHover = (index: number) => {
    // NOTE: 키보드 네비게이션 중에는 마우스 hover 무시
    if (!isKeyboardNavigation) {
      setFocusedIndex(index);
    }
  };

  const handleMouseMove = () => {
    // NOTE: 실제 마우스 이동 시 키보드 모드 해제
    setIsKeyboardNavigation(false);
  };

  const handleBlur = () => {
    // NOTE: 포커스가 완전히 벗어나면 드롭다운 닫기
    setTimeout(() => {
      if (
        selectRef.current &&
        !selectRef.current.contains(document.activeElement)
      ) {
        setIsOpen(false);
      }
    }, 0);
  };

  return (
    <div className={styles.selectContainer} ref={selectRef} {...props}>
      {name && <input type='hidden' name={name} value={value || ''} />}

      <div
        className={styles.selectButton({ isPlaceholder, isError })}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        role='combobox'
        aria-expanded={isOpen}
        aria-haspopup='listbox'
        aria-invalid={isError}
        tabIndex={0}
      >
        <span className={styles.selectText}>{displayText}</span>
        <ChevronDownIcon className={styles.chevronIcon({ isOpen })} />
      </div>

      {isOpen && isPositionCalculated && (
        <div
          className={styles.optionsContainer({ position: dropdownPosition })}
          role='listbox'
          ref={optionsRef}
          onMouseMove={handleMouseMove}
        >
          {options.map((option, index) => (
            <div
              key={option.value}
              ref={el => {
                optionRefs.current[index] = el;
              }}
              className={styles.option({
                isSelected: option.value === value,
                isFocused: index === focusedIndex,
              })}
              onClick={() => handleOptionClick(option)}
              onMouseEnter={() => handleOptionHover(index)}
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
