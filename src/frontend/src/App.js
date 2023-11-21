import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from '../src/redux/store';
import MainPage from './components/MainPage/MainPage';
import StartForm from './components/StartForm/StartForm';
import Game from './components/Game/Game';
import Results from './components/Results/Results';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/start" element={<StartForm />} />
            <Route path="/game" element={<Game />} />
            <Route path="/results" element={<Results />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
