import { useCallback, useEffect, useRef, useState } from 'react';

import { useSnackbar } from 'notistack';

import playersData from '@/data/players.json';

import {
  container,
  filledCell,
  gridCell,
  gridContainer,
  highlightCell,
  inputContainer,
  numberInput,
  playerImage,
  playerInfo,
} from './Grid.css';
import { List } from './List';

type PlayerType = {
  id: string;
  name: string;
  number: number;
  position: string;
  imageUrl: string;
};

type CellType = 'empty' | PlayerType;

const initialPlayers: PlayerType[] = playersData.players;

export const Grid = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [grid, setGrid] = useState<CellType[][]>(
    Array(6).fill(Array(5).fill('empty')),
  );
  const [highlightedCell, setHighlightedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [maxCount, setMaxCount] = useState<number>(11);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getFilledCount = useCallback((grid: CellType[][]) => {
    return grid.reduce(
      (count, row) => count + row.filter(cell => cell !== 'empty').length,
      0,
    );
  }, []);

  const debouncedShowToast = useCallback(
    (message: string) => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
      toastTimeoutRef.current = setTimeout(() => {
        enqueueSnackbar(message, {
          variant: 'warning',
          autoHideDuration: 3000,
        });
        toastTimeoutRef.current = null;
      }, 300);
    },
    [enqueueSnackbar],
  );

  const handleDragStart = useCallback(
    (e: React.DragEvent, player: PlayerType, row?: number, col?: number) => {
      const dragData = {
        player: {
          id: player.id,
          name: player.name,
          number: player.number,
          position: player.position,
          imageUrl: player.imageUrl,
        },
        sourceRow: row,
        sourceCol: col,
      };
      e.dataTransfer.setData('text/plain', JSON.stringify(dragData));
      e.dataTransfer.effectAllowed = 'move';
    },
    [],
  );

  const handleDragEnd = useCallback(() => {
    setHighlightedCell(null);
  }, []);

  const handleDragOver = useCallback(
    (e: React.DragEvent, row: number, col: number) => {
      e.preventDefault();
      const currentFilledCount = getFilledCount(grid);

      if (grid[row][col] === 'empty' && currentFilledCount < maxCount) {
        e.dataTransfer.dropEffect = 'move';
        setHighlightedCell({ row, col });
      } else {
        e.dataTransfer.dropEffect = 'none';
        setHighlightedCell(null);
        if (currentFilledCount >= maxCount && grid[row][col] === 'empty') {
          debouncedShowToast(
            '최대 배치 수를 초과하여 더 이상 배치할 수 없습니다.',
          );
        }
      }
    },
    [grid, maxCount, getFilledCount, debouncedShowToast],
  );

  const handleDragLeave = useCallback(() => {
    setHighlightedCell(null);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, targetRow: number, targetCol: number) => {
      e.preventDefault();
      e.stopPropagation();

      console.log('handleDrop', targetRow, targetCol);

      try {
        const dragData = JSON.parse(e.dataTransfer.getData('text/plain')) as {
          player: PlayerType;
          sourceRow?: number;
          sourceCol?: number;
        };

        const { player, sourceRow, sourceCol } = dragData;

        setGrid(prevGrid => {
          // 깊은 복사를 위해 각 행을 새로 생성
          const newGrid = prevGrid.map(row => [...row]);
          const currentFilledCount = getFilledCount(newGrid);

          // 소스 셀이 있는 경우 (그리드 내 이동)
          if (sourceRow !== undefined && sourceCol !== undefined) {
            // 타겟 셀이 비어있는 경우
            if (newGrid[targetRow][targetCol] === 'empty') {
              newGrid[targetRow][targetCol] = newGrid[sourceRow][sourceCol];
              newGrid[sourceRow][sourceCol] = 'empty';
            }
            // 타겟 셀이 채워져 있는 경우 (위치 교환)
            else {
              const temp = newGrid[targetRow][targetCol];
              newGrid[targetRow][targetCol] = newGrid[sourceRow][sourceCol];
              newGrid[sourceRow][sourceCol] = temp;
            }
          }
          // 소스 셀이 없는 경우 (리스트에서 드롭)
          else {
            // 이미 그리드에 있는 선수인지 확인
            const isPlayerAlreadyInGrid = newGrid.some(row =>
              row.some(
                cell =>
                  cell !== 'empty' && (cell as PlayerType).id === player.id,
              ),
            );

            if (isPlayerAlreadyInGrid) {
              debouncedShowToast('이미 배치된 선수입니다.');
              return prevGrid;
            }

            // 최대 개수를 초과하면 드롭 불가
            if (currentFilledCount >= maxCount) {
              debouncedShowToast(
                '최대 배치 수를 초과하여 더 이상 배치할 수 없습니다.',
              );
              return prevGrid;
            }

            // 타겟 셀이 이미 채워져 있으면 드롭 불가
            if (newGrid[targetRow][targetCol] !== 'empty') {
              debouncedShowToast('이미 채워진 셀이어서 배치할 수 없습니다.');
              return prevGrid;
            }

            newGrid[targetRow][targetCol] = player;
          }

          return newGrid;
        });
      } catch (error) {
        console.error('Failed to parse dropped player:', error);
      }

      setHighlightedCell(null);
    },
    [maxCount, getFilledCount, debouncedShowToast],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Math.min(Math.max(1, parseInt(e.target.value) || 1), 11);
      const currentFilledCount = getFilledCount(grid);

      if (newValue < currentFilledCount) {
        setGrid(Array(6).fill(Array(5).fill('empty')));
        enqueueSnackbar('선수들이 제거되었습니다.', { variant: 'info' });
      }

      setMaxCount(newValue);
    },
    [grid, getFilledCount, enqueueSnackbar],
  );

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={container}>
      <div className={inputContainer}>
        <span>최대 배치 수:</span>
        <input
          type='number'
          className={numberInput}
          min='1'
          max='11'
          value={maxCount}
          onChange={handleInputChange}
        />
        <span>
          ({getFilledCount(grid)}/{maxCount})
        </span>
      </div>
      <div style={{ display: 'flex', gap: '32px' }}>
        <List items={initialPlayers} onDragStart={handleDragStart} />
        <div className={gridContainer} onDragLeave={handleDragEnd}>
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`${cell !== 'empty' ? filledCell : gridCell} ${
                  highlightedCell?.row === rowIndex &&
                  highlightedCell?.col === colIndex
                    ? highlightCell
                    : ''
                }`}
                draggable={cell !== 'empty'}
                onDragStart={e =>
                  cell !== 'empty' &&
                  handleDragStart(e, cell as PlayerType, rowIndex, colIndex)
                }
                onDragEnd={handleDragEnd}
                onDragOver={e => handleDragOver(e, rowIndex, colIndex)}
                onDragLeave={handleDragLeave}
                onDrop={e => handleDrop(e, rowIndex, colIndex)}
              >
                {cell !== 'empty' && (
                  <>
                    <img
                      src={(cell as PlayerType).imageUrl}
                      alt={(cell as PlayerType).name}
                      className={playerImage}
                      onError={e => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/player-default.png';
                      }}
                    />
                    <div className={playerInfo}>
                      <div>
                        #{(cell as PlayerType).number}{' '}
                        {(cell as PlayerType).name}
                      </div>
                    </div>
                  </>
                )}
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
};
