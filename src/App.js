import './App.css';
import TaskManager from './components/TaskManager';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<TaskManager/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
