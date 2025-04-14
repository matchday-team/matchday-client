import { loaderContainer, spinner } from './style.css';

export const CommonLoader = () => {
  return (
    <div className={loaderContainer}>
      <div className={spinner}></div>
    </div>
  );
};
