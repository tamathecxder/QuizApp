import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Box, Container, Typography } from "@mui/material";
import './style.css'

function App() {
  const style = {
    backgroundColor: "#212121",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    color: "white",
    fontFamily: "Arial",
    left: "0",
    bottom: "0",
    height: "70px",
    width: "100%"
  };

  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Typography variant="h2" fontWeight="bold">
                    Quiz App
                  </Typography>
                  <Settings />
                </>
              }
            />
            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>

        <div style={style}>
          <div className="row">
            <div className="column">
              Inspired By: <a href="https://www.youtube.com/watch?v=6LROvk5d8H8" rel="noreferrer" target="_blank" style={{ color: "#9e9e9e" }}>Cand Dev Tutorial's</a>
            </div>
            <div className="column">
              <div className="mobile-mt">
                &copy; Made by <a style={{ color: "#9e9e9e" }} rel="noreferrer" target="_blank" href="https://github.com/deezycxde">Yudistira Eka Pratama</a> <span>| With ReactJS, Redux, Material UI, TriviaDB API</span>
                <div>Project repository: <a href="https://github.com/deezycxde/QuizApp" target="_blank" rel="noreferrer" style={{ color: "#9e9e9e" }}>GitHub</a></div>

              </div>
            </div>
          </div>
        </div>
      <div>
      </div>
    </Router>
  );
}

export default App;
