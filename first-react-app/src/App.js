import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

function App() {
  return (
    <div className="App">
      
        <p>ClassComponent</p>
        <ClassComponent/>
        <br/>
        <p>Function Components</p>
        <FunctionComponent/>
    </div>
  );
}

export default App;
