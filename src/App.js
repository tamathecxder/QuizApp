import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import FinalScreen from './pages/FinalScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Settings />
        </Route>
        <Route path="/questions">
          <Questions />
        </Route>
        <Route path="/final">
          <FinalScreen />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
