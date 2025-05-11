import "modern-normalize";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactsPage from './pages/ContactsPage';
import Layout from "./layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUserThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";


const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='contacts' element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          } />
        </Route>
        <Route path='*' element={<NotFoundPage/>} />
        <Route path='/login' element={
          <RestrictedRoute redirectTo='/contacts'>
          <LoginPage/>
        </RestrictedRoute>} />
        <Route path='/register' element={<RegistrationPage/>} />
      </Routes>
    </>
  )
}


export default App;
