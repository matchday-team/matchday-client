import { useCallback, useRef, useState } from 'react';

import { useSnackbar } from 'notistack';

import {
  container,
  draggableElement1,
  draggableElement2,
  draggableElement3,
  draggableElements,
  filledCell,
  gridCell,
  gridContainer,
  highlightCell,
  inputContainer,
  numberInput,
} from './Grid.css';

type CellType = 'empty' | 'green' | 'blue' | 'orange';

const Grid = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [grid, setGrid] = useState<CellType[][]>(
    Array(6).fill(Array(5).fill('empty')),
  );
  const [isDragging, setIsDragging] = useState(false);
  const dragItemRef = useRef<HTMLDivElement>(null);
  const [draggedType, setDraggedType] = useState<CellType>('empty');
  const [sourceCell, setSourceCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [highlightedCell, setHighlightedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [maxCount, setMaxCount] = useState<number>(11);

  const getFilledCount = useCallback((grid: CellType[][]) => {
    return grid.reduce(
      (count, row) => count + row.filter(cell => cell !== 'empty').length,
      0,
    );
  }, []);

  const showToast = useCallback(
    (message: string) => {
      // 3초 동안은 토스트를 표시하지 않음
      enqueueSnackbar(message, {
        variant: 'warning',
        autoHideDuration: 3000,
      });
    },
    [enqueueSnackbar],
  );

  const handleDragStart = useCallback(
    (e: React.DragEvent, type: CellType, row?: number, col?: number) => {
      setIsDragging(true);
      setDraggedType(type);
      if (row !== undefined && col !== undefined) {
        setSourceCell({ row, col });
      }
      if (dragItemRef.current) {
        e.dataTransfer.setData('text/plain', '');
        e.dataTransfer.effectAllowed = 'move';
      }
    },
    [],
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setDraggedType('empty');
    setSourceCell(null);
    setHighlightedCell(null);
  }, []);

  const handleDragOver = useCallback(
    (e: React.DragEvent, row: number, col: number) => {
      e.preventDefault();
      const currentFilledCount = getFilledCount(grid);

      if (grid[row][col] === 'empty' && currentFilledCount <= maxCount) {
        e.dataTransfer.dropEffect = 'move';
        setHighlightedCell({ row, col });
      } else {
        e.dataTransfer.dropEffect = 'none';
        setHighlightedCell(null);
      }
    },
    [grid, maxCount, getFilledCount],
  );

  const handleDragLeave = useCallback(() => {
    setHighlightedCell(null);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, targetRow: number, targetCol: number) => {
      e.preventDefault();
      e.stopPropagation();

      // 타겟 셀이 이미 채워져 있으면 드롭 불가
      if (grid[targetRow][targetCol] !== 'empty') {
        showToast('이미 채워진 셀이어서 배치할 수 없습니다.');
        return;
      }

      // NOTE: StrictMode에서는 setState updater function이 2번 호출
      setGrid(prevGrid => {
        const newGrid = prevGrid.map(r => [...r]);
        const currentFilledCount = getFilledCount(newGrid);

        console.log(e, currentFilledCount, maxCount);

        // 최대 개수를 초과하면 드롭 불가
        if (currentFilledCount >= maxCount) {
          showToast('최대 배치 수를 초과하여 더 이상 배치할 수 없습니다.');
          return newGrid;
        }

        // 소스 셀이 있는 경우 (그리드 내 이동)
        if (sourceCell) {
          const { row: sourceRow, col: sourceCol } = sourceCell;
          newGrid[targetRow][targetCol] = newGrid[sourceRow][sourceCol];
          newGrid[sourceRow][sourceCol] = 'empty';
        }
        // 소스 셀이 없는 경우 (외부에서 드롭)
        else {
          newGrid[targetRow][targetCol] = draggedType;
        }

        return newGrid;
      });
      setHighlightedCell(null);
    },
    [draggedType, sourceCell, grid, maxCount, getFilledCount, showToast],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value);
      if (!isNaN(value) && value >= 1 && value <= 11) {
        const currentFilledCount = getFilledCount(grid);
        if (value < currentFilledCount) {
          // 새로운 최대값이 현재 채워진 셀의 수보다 작으면 그리드 초기화
          setGrid(Array(6).fill(Array(5).fill('empty')));
          showToast('최대 배치 수가 줄어들어 그리드가 초기화되었습니다.');
        }
        setMaxCount(value);
      }
    },
    [grid, getFilledCount, showToast],
  );

  const getCellStyle = (type: CellType) => {
    switch (type) {
      case 'green':
        return { backgroundColor: '#4CAF50' };
      case 'blue':
        return { backgroundColor: '#2196F3' };
      case 'orange':
        return { backgroundColor: '#FF9800' };
      default:
        return {};
    }
  };

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
      <div className={draggableElements}>
        <div
          ref={dragItemRef}
          className={draggableElement1}
          draggable
          onDragStart={e => handleDragStart(e, 'green')}
          onDragEnd={handleDragEnd}
        />
        <div
          className={draggableElement2}
          draggable
          onDragStart={e => handleDragStart(e, 'blue')}
          onDragEnd={handleDragEnd}
        />
        <div
          className={draggableElement3}
          draggable
          onDragStart={e => handleDragStart(e, 'orange')}
          onDragEnd={handleDragEnd}
        />
      </div>
      <div className={gridContainer} onDragLeave={handleDragLeave}>
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={[
                cell !== 'empty' ? filledCell : gridCell,
                highlightedCell?.row === rowIndex &&
                highlightedCell?.col === colIndex
                  ? highlightCell
                  : '',
              ].join(' ')}
              style={getCellStyle(cell)}
              draggable={cell !== 'empty'}
              onDragStart={e =>
                cell !== 'empty' && handleDragStart(e, cell, rowIndex, colIndex)
              }
              onDragEnd={handleDragEnd}
              onDrop={e => handleDrop(e, rowIndex, colIndex)}
              onDragOver={e => handleDragOver(e, rowIndex, colIndex)}
            />
          )),
        )}
      </div>
    </div>
  );
};

export default Grid;
