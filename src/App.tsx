import viteLogo from '/vite.svg';
import solidLogo from '/solidjs.svg';
import typescriptLogo from './typescript.svg';
import { Counter } from './components/Counter';

export const App = () => {
  return (
    <div>
      <a href="https://solidjs.com" target="_blank">
        <img src={solidLogo} class="logo" alt="Solid.js logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={typescriptLogo} class="logo ts" alt="TypeScript logo" />
      </a>
      <h1>Solid + Vite + TypeScript</h1>
      <div class="card">
        <Counter />
      </div>
      <p class="read-the-docs">
        Click on the Solid, Vite and TypeScript logos to learn more
      </p>
    </div>
  );
};
