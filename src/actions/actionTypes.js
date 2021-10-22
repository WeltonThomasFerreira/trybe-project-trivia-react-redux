import md5 from 'crypto-js/md5';

export const SET_USER = 'SET_USER';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_ASK = 'GET_ASK';
export const GET_AVATAR = 'GET_AVATAR';

const urlToken = 'https://opentdb.com/api_token.php?command=request';


export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const getToken = (payload) => ({ type: GET_TOKEN, payload });


export const getAsk = (payload) => ({ type: GET_ASK, payload });

export const requestTokenApi = async () => {
  const response = await fetch(urlToken);

export const getAvatar = (payload) => ({
  type: GET_AVATAR,
  payload,
});

export const requestApi = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const resultApi = () => async (dispatch) => {
  const result = await requestTokenApi();
  dispatch(getToken(result));
};

export const requestAskApi = async () => {
  const myToken = await JSON.parse(localStorage.getItem('token'));
  const urlAsk = `https://opentdb.com/api.php?amount=5&token=${myToken}`;
  const response = await fetch(urlAsk);
  const data = await response.json();
  return data;
};

export const resultAsk = () => async (dispatch) => {
  const result = await requestAskApi();
  dispatch(getAsk(result));

export const requestAvatar = async (email) => {
  const hash = await md5(email).toString();
  return fetch(`https://www.gravatar.com/avatar/${hash}`);
};

export const resultAvatar = (email) => async (dispatch) => {
  const response = await requestAvatar(email);
  dispatch(getAvatar(response.url));
};
