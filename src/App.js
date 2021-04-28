
import './App.css';
import Home from './Home.js';
import Header from './Header.js'; 
import CreateAccount from './createAccount.js';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path="/createAccount">
            <Header></Header>
            <CreateAccount></CreateAccount>
          </Route>
          <Route path="/scoreboard">
            <Header></Header>
            <h3>Scoreboard</h3>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
