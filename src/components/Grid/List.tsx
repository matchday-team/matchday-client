import { useCallback } from 'react';

import {
  listContainer,
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
};

export const List = ({ items, onDragStart }: ListProps) => {
  const handleDragStart = useCallback(
    (e: React.DragEvent, item: PlayerType) => {
      e.dataTransfer.setData('text/plain', JSON.stringify(item));
      onDragStart(e, item);
    },
    [onDragStart],
  );

  return (
    <div className={listContainer}>
      <div className={listTitle}>선수 명단 ({items.length})</div>
      {items.map(item => (
        <div
          key={item.id}
          className={listItem}
          draggable
          onDragStart={e => handleDragStart(e, item)}
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
  );
};
