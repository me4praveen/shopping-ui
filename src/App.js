import React from 'react';
import './App.scss';
import Auth from './auth/Auth';
import { Provider } from 'react-redux';
import Header from './components/Header';
import store from './redux/store'

function App() {
  console.log('render App');
  return (
    <Provider store= {store}>
      <div className="App">
        <Header />
        <Auth />
      </div>
    </Provider>
    
  );
}

export default App;
