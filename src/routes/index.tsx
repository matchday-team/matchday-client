import { createFileRoute } from '@tanstack/react-router';

import { button } from '../styles/button.css';
import { lightThemeClass } from '../styles/theme.css';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className={lightThemeClass}>
      <h3>Home</h3>
      <button className={button}>Click me</button>
    </div>
  );
}
