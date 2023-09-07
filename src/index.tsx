import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/style.css";
import "./styles/style-2.scss";
import "./styles/style-main.scss";
import { BrowserRouter } from 'react-router-dom';
import { ThemeState } from './contexts/ThemeContext';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeState>
        <App/>
      </ThemeState>
    </Provider>
  </BrowserRouter>
);