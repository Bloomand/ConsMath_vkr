import axios from "axios";

EXPO_PUBLIC_GOOGLE_API_KEY=`AIzaSyAmyrRp_5RIxY-ieqPdce-M4vppLiDBwk8`
EXPO_PUBLIC_DB_URL=`https://test-292a0-default-rtdb.firebaseio.com`


export const getUserInfo = (userId) => {
  return axios.get(`${EXPO_PUBLIC_DB_URL}/users/${userId}.json`);
};

export const setUserPoints = (userId, info) => {
  return axios.patch(`${EXPO_PUBLIC_DB_URL}/users.json`, {
    [userId]: {
      id: userId,
      ...info,
    },
  });
};

export const getUsers = () => {
  return axios.get(`${EXPO_PUBLIC_DB_URL}/users.json`);
};
