import React from 'react';
import ReactDOM from 'react-dom';
import { TasksContext } from './contexts/TasksContext';
import MainView from './views/MainView';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <TasksContext.Provider>
      <MainView />
    </TasksContext.Provider>
  </DndProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
