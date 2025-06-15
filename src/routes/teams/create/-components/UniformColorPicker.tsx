import * as styles from './UniformColorPicker.css';

interface UniformColor {
  top?: string;
  bottom?: string;
  socks?: string;
}

interface UniformColorPickerProps {
  uniformColors: UniformColor;
  onColorChange: (type: 'top' | 'bottom' | 'socks', color: string) => void;
}

const colorTypes = [
  { key: 'top', label: '상의' },
  { key: 'bottom', label: '하의' },
  { key: 'socks', label: '스타킹' },
] as const;

export const UniformColorPicker = ({
  uniformColors,
  onColorChange,
}: UniformColorPickerProps) => {
  return (
    <div className={styles.uniformColors}>
      {colorTypes.map(({ key, label }) => (
        <label
          key={`color-group-${key}`}
          className={styles.colorGroup}
          htmlFor={`uniform-color-${key}`}
        >
          <div className={styles.colorPicker}>
            <div
              className={styles.colorCircle({
                isEmpty: !uniformColors?.[key],
              })}
              style={{
                backgroundColor: uniformColors?.[key] || undefined,
              }}
            >
              <input
                id={`uniform-color-${key}`}
                key={`uniform-color-${key}`}
                type='color'
                value={uniformColors?.[key] || '#000000'}
                onChange={e => onColorChange(key, e.target.value)}
                className={styles.colorInput}
              />
            </div>
          </div>
          <span className={styles.colorLabel}>{label}</span>
        </label>
      ))}
    </div>
  );
};
