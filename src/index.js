import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// 自己引入的 上面是第三方引入的
import App from '@/App';
import 'normalize.css'
import './assets/css/index.css'
import store from './store';
import theme from './assets/theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
      {/* <React.StrictMode> */}
        <Provider store={store}>
          <ThemeProvider theme={theme}>
          <Suspense fallback={<h2>页面正在加载</h2>}>
            <App />
        </Suspense>
          </ThemeProvider>
        </Provider>
      {/* </React.StrictMode> */}
  </HashRouter>

);
