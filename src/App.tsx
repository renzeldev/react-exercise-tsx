import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import Home from './components/home';
import Home1 from './components/home1';
import ExampleComponent from './components/home2';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import UseCallBackComponent from './components/useCallBackComponent';
import UseMemoComponent from './components/useMemoComponent';
import MyProvider from './components/MyProvider';

function App() {
  return (
    <MyProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/dashboard1" element={<Home1 />} />
            <Route path="/dashboard2" element={<ExampleComponent />} />
            <Route path="/componentA" element={<ComponentA />} />
            <Route path="/componentB" element={<ComponentB />} />
            <Route path="/callback" element={<UseCallBackComponent />} />
            <Route path='/useMemo' element={<UseMemoComponent />} />
          </Routes>
        </Router>
      </Provider>
    </MyProvider>
  );
}

export default App;
