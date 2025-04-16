import { useCallback } from 'react';

import {
  listContainer,
  listContent,
  listItem,
  listTitle,
  playerImage,
  playerInfo,
} from './List.css';

type PlayerType = {
  id: string;
  name: string;
  number: number;
  position: string;
  imageUrl: string;
};

type ListProps = {
  items: PlayerType[];
  onDragStart: (e: React.DragEvent, item: PlayerType) => void;
  onDrop: (e: React.DragEvent, targetPlayer?: PlayerType) => void;
  onDragOver: (e: React.DragEvent) => void;
};

export const List = ({ items, onDragStart, onDrop, onDragOver }: ListProps) => {
  const handleDragStart = useCallback(
    (e: React.DragEvent, item: PlayerType) => {
      e.dataTransfer.setData('text/plain', JSON.stringify(item));
      onDragStart(e, item);
    },
    [onDragStart],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent, targetPlayer?: PlayerType) => {
      e.preventDefault();
      e.stopPropagation();
      onDrop(e, targetPlayer);
    },
    [onDrop],
  );

  // 등번호 기준으로 정렬된 선수 목록
  const sortedItems = [...items].sort((a, b) => a.number - b.number);

  return (
    <div
      className={listContainer}
      onDrop={e => handleDrop(e)}
      onDragOver={onDragOver}
    >
      <div className={listTitle}>선수 명단 ({items.length})</div>
      <div className={listContent}>
        {sortedItems.map(item => (
          <div
            key={item.id}
            className={listItem}
            draggable
            onDragStart={e => handleDragStart(e, item)}
            onDrop={e => handleDrop(e, item)}
            onDragOver={onDragOver}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className={playerImage}
              draggable='false'
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/player-default.png';
              }}
            />
            <div className={playerInfo}>
              <div>{item.name}</div>
              <div>
                #{item.number} {item.position}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
