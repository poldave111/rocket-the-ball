import './App.css';
import { Provider } from 'react-redux';
import { HashRouter, Routes, Route } from 'react-router-dom';
import store from '../src/redux/store';
import MainPage from './components/MainPage/MainPage';
import StartForm from './components/StartForm/StartForm';
import Game from './components/Game/Game';
import Results from './components/Results/Results';
import GameResults from './components/GameResults/GameResults';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/start" element={<StartForm />} />
            <Route path="/game" element={<Game />} />
            <Route path="/results" element={<Results />} />
            <Route path="/gameresults" element={<GameResults />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
