// 根组件
import React from 'react';
import { Provider } from 'react-redux'
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import Router from './router';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <Router />
    </Provider>
  );
}

export default App;