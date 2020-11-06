import './App.css';
import { PartidoList } from './components/partido/PartidoList'
import { DeputadoList } from './components/deputado/DeputadoList';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <h1>api-partido</h1>
        <Link to='/partidos'>Partidos</Link>
        <br />
        <Link to='/deputados'>Deputados</Link>
        <Switch>
          <Route path='/partidos'><PartidoList /></Route>
          <Route path='/deputados'><DeputadoList /></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
