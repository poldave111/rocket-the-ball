import './App.css';
import { Provider } from 'react-redux';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import store from '../src/redux/store';
import MainPage from './components/MainPage/MainPage';
import StartForm from './components/StartForm/StartForm';
import Game from './components/Game/Game';
import GamePoints from './components/GamePoints/GamePoints';
import Results from './components/Results/Results';
import GameResults from './components/GameResults/GameResults';
import TitleBar from './components/TitleBar/TitleBar';
import TestComponent from './components/TestComponent/TestComponent';
import LayoutWithTitleBar from './components/LayoutWithTitleBar/LayoutWithTitleBar';

function App() {
  return (
    // tutaj czymś owijającym ma być zielony prostokąt, <div className="App"> ma mieć tylko zielone tło. 
    // niech zawsze zawartość widoku mieści się w zielonym prostokącie.
    <div className="App">
      <HashRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/main" element={<LayoutWithTitleBar foo={"bar"} />}>
              <Route path="index" element={<MainPage />} />
              <Route path="start" element={<StartForm />} />
              <Route path="game" element={<Game />} />
              <Route path="results" element={<Results />} />
              <Route path="gameresults" element={<GameResults />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
            <Route path="/side">
              <Route path="points" element={<GamePoints />} />
              <Route path="test1" element={<TestComponent>Test1</TestComponent>} /> 
              <Route path="test2" element={<TestComponent>Test2</TestComponent>} /> 
              <Route path="test3" element={<TestComponent>Test3</TestComponent>} /> 
            </Route>
          </Routes>
        </Provider>
      </HashRouter>
      {/* 
      <Route path="/" component={App}> */}
      {/* <IndexRoute component={HomePage} />
    <Route component={LayoutOne}>
        <Route path="A" component={pageA} />
        <Route path="B" component={pageB} />
    </Route>
    <Route component={LayoutTwo}>
        <Route path="C" component={pageC} />
        etc...
    </Route>
    <Route path="*" component={NotFoundPage} /> */}
      {/* </Route>  */}


    </div>
  );
}

export default App;
