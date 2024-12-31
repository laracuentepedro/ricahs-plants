import apiFetch from "./apiFetch";

export const createUser = ({ username, password }) => {
  return apiFetch("POST", "/users", { username, password });
};

//Session api
//POST - /users/session
//body: { username, password }
export const createSession = ({ username, password }) => {
  return apiFetch("POST", "/users/session", { username, password });
};

const CAPSTONE_SESSION_TOKEN_KEY = "capstone_session_token";

export const setSessionTokenStorage = (capstoneSessionToken) =>
  localStorage.setItem(CAPSTONE_SESSION_TOKEN_KEY, capstoneSessionToken);

export const getSessionTokenStorage = () =>
  localStorage.getItem(CAPSTONE_SESSION_TOKEN_KEY);

export const removeSessionTokenStorage = () =>
  localStorage.removeItem(CAPSTONE_SESSION_TOKEN_KEY);