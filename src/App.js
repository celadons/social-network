import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          exact
          path="/profile"
          render={() => <Profile state={props.state.profilePage} />}
        />
        <Route
          exact
          path="/dialogs"
          render={() => <Dialogs state={props.state.dialogsPage} />}
        />
        {/* <Route path="/news" component={} />
          <Route path="/music" component={} />
          <Route path="/settings" component={} /> */}
      </div>
    </div>
  );
}

export default App;
