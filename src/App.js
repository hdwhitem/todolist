import React from 'react';
import {TaskListContextProvider} from './context/TaskContext';
import {TaskList} from './components/TaskList';
import {TaskForm} from './components/TaskForm';
import {Header} from './components/Header'

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <TaskListContextProvider>
      <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
