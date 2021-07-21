import React, { useContext, useState } from 'react';
import jwtDecode from 'jwt-decode';

import * as authApi from '../api/auth';
import * as authStorage from './storage';

const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const userState = useState(null);
  return (
    <AuthContext.Provider value={userState}>{children}</AuthContext.Provider>
  );
}

export function useUser() {
  const [user] = useContext(AuthContext);
  return user;
}

export function useLogin({ onSuccess, onError } = {}) {
  const [_, setUser] = useContext(AuthContext);
  return (credentials) => {
    return authApi
      .login(credentials)
      .then((token) => {
        const user = jwtDecode(token);
        setUser(user);
        authStorage.storeToken(token);
        onSuccess?.();
      })
      .catch((error) => {
        onError?.(error);
      });
  };
}

export function useRegister({ onSuccess, onError }) {
  const login = useLogin({ onSuccess, onError });
  return (userInfo) =>
    authApi
      .register(userInfo)
      .then(({ email, password }) => login({ email, password }))
      .then(() => onSuccess?.())
      .catch((error) => {
        onError?.(error);
      });
}

export function useTryAutoLogin() {
  const [_, setUser] = useContext(AuthContext);
  return async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };
}

export function useLogout() {
  const [_, setUser] = useContext(AuthContext);
  return () => {
    setUser(null);
    authStorage.removeToken();
  };
}
