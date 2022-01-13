import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createBrowserHistory} from 'history';

import { NewRegister } from '../pages/NewRegister';
import { SignIn } from "../pages/SignIn";
import { FormUser } from "../pages/FormUser";

import {PrivateRoute} from '../components/PrivateRoute'


export const RoutesForm = () => {



  return (
    
    <>
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<NewRegister />} />
          {/* <Route path="/user" element={<FormUser />} /> */}
          <Route path="/form" element={<PrivateRoute />} >
            <Route path="/form" element={<FormUser />} />
          </Route>
          <Route  path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}