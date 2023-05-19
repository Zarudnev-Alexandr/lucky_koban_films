import './App.css';
import './scss/style.scss'
import { BrowserRouter as Router, useRoutes, Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import Film from './pages/Film';
import Admin from './pages/Admin';
import Login from './pages/Login';
import { useEffect, useMemo, useState } from 'react';

function App() {

  useEffect(()=>{
    getMe();
  }, []);

  let getMe = async function() {
    let data;
    await fetch('https://4947.ru/lucky_koban_films/api/auth/get_me',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
          // Authorization: token,
        },
      }).then(response => response.ok ? response.text() : null)
      .then(response => {
        data = response ? JSON.parse(response) : null;
      })
    localStorage.setItem('role', data.user_role);
    localStorage.setItem('user_id', data.user_id);
    // setJob(data.user_role);
    // setJob(localStorage.getItem('job'))
    // setToken(localStorage.getItem('job'))
  }

  return(
    <>
      {/* <userContext.Provider value={[jobValue, tokenValue]}> */}
        <Router>
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/film' element={<Film />} />
            <Route exact path='/admin' element={<Admin />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </Router>
      {/* </userContext.Provider> */}
    </>
  )



  // const routes = useRoutes([
  //   { path: "/", element: <Main /> },
  //   { path: "/film", element: <Film /> },
  //   { path: "/admin", element: <Admin /> },
  // ]);
  // return routes;
}

// const AppWrapper = () => {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// };

// export default AppWrapper;
export default App;
