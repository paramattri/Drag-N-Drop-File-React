import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Analytics from './Analytics';
import './App.css';
import DragNDrop from './DragNDrop';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={DragNDrop}></Route>
          <Route path="/analytics" exact component={Analytics}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
