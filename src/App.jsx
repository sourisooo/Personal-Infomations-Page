
import './App.css';
import Accountpage from './Composants/Accountpage';
import Navbar from './Composants/Navbar';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'
import ProfilPage from './Composants/Profilpage';

function App() {
  return (
    <div className="App">

<BrowserRouter>
        <nav>
          <h1>My Personal Datas</h1>
          <NavLink exact to="/">Account page</NavLink>
          <br /> <br />     

        </nav>

        <Switch>

        <Route exact path="/">
        <Navbar/>
          </Route>

          <Route exact path="/profile/:id">
          <ProfilPage/>
          </Route>


   </Switch>

</BrowserRouter>

    </div>
  );
}

export default App;
