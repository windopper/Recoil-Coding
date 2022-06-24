import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil';
import ToDoList from './components/ToDoList'
import './App.css';

function App() {
  return (
    <RecoilRoot >
      <ToDoList />
    </RecoilRoot>
  );
}

export default App;