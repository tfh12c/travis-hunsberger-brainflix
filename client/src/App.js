import './App.scss';
import{ BrowserRouter, Switch, Route } from 'react-router-dom';
import PageHeader from './components/PageHeader/PageHeader';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';

function App() {
return (
  <BrowserRouter>
    <PageHeader />
    <Switch>
    <Route path="/upload" component={UploadPage}/>
    <Route path="/" exact component={HomePage} />
    <Route path="/:videoId" component={HomePage} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;