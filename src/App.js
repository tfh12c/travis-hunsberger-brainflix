import './App.scss';
import{ BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';

function App() {
return (
  <BrowserRouter>
    <Header />
    <Switch>
    <Route path="/upload" component={UploadPage}/>
    <Route path="/" exact component={HomePage} />
    <Route path="/:videoId" component={HomePage} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;