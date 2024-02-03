import { useCallback, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import * as _ from 'underscore';
import { logout } from '../store/slices/AuthSlice';
import { resetCompanyRedux } from '../store/slices/CompanyRegistrationSlice';
import { deleteCookie, setCookie } from '../utils';

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [jumpToNext, setJumpToNext] = useState(false);

  const {
    company: { companyDetails, companyList },
    auth: { loginSuccess }
  } = useSelector((state) => state);
  const signin = useCallback(async () => {
    if (!_.isUndefined(loginSuccess?.token)) {
      setCookie(btoa('epacknook.token'), btoa(loginSuccess?.token), 7);
    }

    // else if (_.isEmpty(companyList) && _.isEmpty(companyDetails)) {
    //   setIsAuthenticated(false);
    // }
  }, [loginSuccess?.token]);
  useEffect(() => {
    if (!_.isEmpty(companyDetails)) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      if (!_.isEmpty(companyList)) {
        setJumpToNext(true);
      } else {
        setJumpToNext(false);
      }
    }
  }, [companyDetails, companyList, loginSuccess?.token]);
  useEffect(() => {
    signin();
  }, [signin]);
  const signout = () => {
    dispatch(logout());
    dispatch(resetCompanyRedux());
    deleteCookie(btoa('epackbook.token'));
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
