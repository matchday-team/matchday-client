import { ReactNode } from 'react';

import clsx from 'clsx';

import * as styles from './Table.css';

export interface TableColumn<
  T = Record<string, unknown>,
  K extends keyof T = keyof T,
> {
  key: K;
  title: string;
  width: number;
  minWidth?: number;
  headerAlign?: 'left' | 'center' | 'right';
  bodyAlign?: 'left' | 'center' | 'right';
  renderHeader?: (name: string) => ReactNode;
  render?: (value: T[K], record: T, index: number) => ReactNode;
}

export type TableColumnsDefinition<T> = {
  [K in keyof T]?: TableColumn<T, K>;
};

// TODO: className override보다 Compound 형태로 좀 더 깔끔하게 쓸 수 있게
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
  headerClassName?: string;
  headerRowClassName?: string;
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
  headerClassName,
  headerRowClassName,
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
      <div className={styles.tableContainer}>
        <div className={clsx(styles.header, headerClassName)}>
          <div
            className={clsx(
              styles.headerRow({ align: headerVerticalAlign }),
              headerRowClassName,
            )}
            style={{
              height: headerHeight,
            }}
          >
            {columnEntries.map(([key, column]) => (
              <div
                key={String(key)}
                className={styles.headerCell({
                  align: column.headerAlign || 'center',
                })}
                style={{
                  flexBasis: column.width,
                  minWidth: column.minWidth ?? column.width,
                }}
              >
                {column.renderHeader
                  ? column.renderHeader(column.title)
                  : column.title}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.body}>
          {data.map((record, index) => (
            <div
              key={index}
              className={styles.row({ align: bodyVerticalAlign })}
              style={{
                height: rowHeight,
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
                    className={styles.cell({
                      align: column.bodyAlign || 'center',
                    })}
                    style={{
                      flexBasis: column.width,
                      minWidth: column.minWidth ?? column.width,
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
    </div>
  );
}
