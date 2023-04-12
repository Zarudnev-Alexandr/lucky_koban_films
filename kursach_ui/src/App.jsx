import './App.css';
import './scss/style.scss'
// import { Route, Routes } from "react-router-dom"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Main from './pages/Main';
import Film from './pages/Film';

function App() {
  const routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/film", element: <Film /> },
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
