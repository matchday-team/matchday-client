import { ReactNode } from 'react';

import clsx from 'clsx';

import * as styles from './Table.css';

const getAlignItems = (align: 'top' | 'center' | 'bottom') => {
  switch (align) {
    case 'top':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'bottom':
      return 'flex-end';
  }
};

const getJustifyContent = (align: 'left' | 'center' | 'right') => {
  switch (align) {
    case 'left':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
  }
};

export interface TableColumn<
  T = Record<string, unknown>,
  K extends keyof T = keyof T,
> {
  key: K;
  title: string;
  width: number;
  headerAlign?: 'left' | 'center' | 'right';
  bodyAlign?: 'left' | 'center' | 'right';
  render?: (value: T[K], record: T, index: number) => ReactNode;
}

export type TableColumnsDefinition<T> = {
  [K in keyof T]?: TableColumn<T, K>;
};

interface TableProps<T = Record<string, unknown>> {
  columns: Partial<TableColumnsDefinition<T>>;
  data: T[];
  headerHeight?: number;
  rowHeight?: number;
  headerVerticalAlign?: 'top' | 'center' | 'bottom';
  bodyVerticalAlign?: 'top' | 'center' | 'bottom';
  onRowClick?: (record: T, index: number) => void;
  headerActions?: ReactNode;
  className?: string;
}

export function Table<T = Record<string, unknown>>({
  columns,
  data,
  headerHeight = 60,
  rowHeight = 48,
  headerVerticalAlign = 'center',
  bodyVerticalAlign = 'center',
  onRowClick,
  headerActions,
  className,
}: TableProps<T>) {
  const columnEntries = Object.entries(columns).map(
    ([key, column]) =>
      [key as keyof T, column as TableColumn<T, keyof T>] as const,
  );

  return (
    <div className={clsx(styles.rootContainer, className)}>
      {headerActions && (
        <div className={styles.headerActions}>{headerActions}</div>
      )}
      <div className={styles.header}>
        <div
          className={styles.headerRow}
          style={{
            height: headerHeight,
            alignItems: getAlignItems(headerVerticalAlign),
          }}
        >
          {columnEntries.map(([key, column]) => (
            <div
              key={String(key)}
              className={styles.headerCell}
              style={{
                width: column.width,
                justifyContent: getJustifyContent(
                  column.headerAlign || 'center',
                ),
              }}
            >
              {column.title}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.body}>
        {data.map((record, index) => (
          <div
            key={index}
            className={styles.row}
            style={{
              height: rowHeight,
              alignItems: getAlignItems(bodyVerticalAlign),
            }}
            onClick={() => onRowClick?.(record, index)}
          >
            {columnEntries.map(([key, column]) => {
              const cellValue = record[key];
              const cellContent = column.render
                ? column.render(cellValue, record, index)
                : cellValue;

              return (
                <div
                  key={String(key)}
                  className={styles.cell}
                  style={{
                    width: column.width,
                    justifyContent: getJustifyContent(
                      column.bodyAlign || 'center',
                    ),
                  }}
                >
                  {cellContent as ReactNode}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
