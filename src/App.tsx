import { RegistrationPage } from './components/Pages/RegistrationPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from './components/Pages/MainPage';
import { LoginPage } from './components/Pages/LoginPage';
import { Dispatch, useEffect } from 'react';
import { useTypedSlector } from './hooks/useTypedSelector';
import { autoLoginFunc } from './async/loginFunction';
import { useDispatch } from 'react-redux';
import { UserAction } from './types/user';

function App() {
  
  const dispatch: Dispatch<UserAction> = useDispatch();
  const { user_id } = useTypedSlector(state => state.user);
  const UserId = localStorage.getItem("user_id");

  useEffect(() => {
    autoLoginFunc(dispatch);
  }, [])

  return (
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route path='/' element={user_id != undefined || UserId != null ? <MainPage /> : <Navigate to="/login-page" />}/>
          <Route path='/login-page' element={user_id === undefined ? <LoginPage /> : <Navigate to={"/"}/>}/>
          <Route path='/registration-page' element={user_id === undefined ? <RegistrationPage /> : <Navigate to={"/"}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;