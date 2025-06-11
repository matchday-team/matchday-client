import { ReactNode } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';
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

export interface TableColumn<T = Record<string, unknown>> {
  key: string;
  title: string;
  width: number;
  headerAlign?: 'left' | 'center' | 'right';
  bodyAlign?: 'left' | 'center' | 'right';
  render?: (value: unknown, record: T, index: number) => ReactNode;
}

interface TableProps<T = Record<string, unknown>> {
  columns: TableColumn<T>[];
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
  const tableVars = assignInlineVars(styles.tableWidthVars, {
    totalWidth: `${columns.reduce((sum, col) => sum + col.width, 0)}px`,
  });

  return (
    <div className={clsx(styles.rootContainer, className)} style={tableVars}>
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
          {columns.map(column => {
            const headerVars = assignInlineVars(styles.columnWidthVars, {
              width: `${column.width}px`,
            });

            return (
              <div
                key={column.key}
                className={styles.headerCell}
                style={{
                  ...headerVars,
                  justifyContent: getJustifyContent(
                    column.headerAlign || 'center',
                  ),
                }}
              >
                {column.title}
              </div>
            );
          })}
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
            {columns.map(column => {
              const cellVars = assignInlineVars(styles.columnWidthVars, {
                width: `${column.width}px`,
              });

              const cellValue = (record as Record<string, unknown>)[column.key];
              const cellContent = column.render
                ? column.render(cellValue, record, index)
                : cellValue;

              return (
                <div
                  key={column.key}
                  className={styles.cell}
                  style={{
                    ...cellVars,
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
