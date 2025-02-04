import axios from "axios";
const EXPO_PUBLIC_GOOGLE_API_KEY=`AIzaSyAmyrRp_5RIxY-ieqPdce-M4vppLiDBwk8`
const EXPO_PUBLIC_DB_URL=`https://test-292a0-default-rtdb.firebaseio.com`

export const setUserPoints = (userId, info) => {
  return axios.patch(`${EXPO_PUBLIC_DB_URL}/users.json`, {
    [userId]: {
      id: userId,
      ...info,
    },
  });
};

export const DEFAULT_USER_DATA = {
  estimation: {
    ranked: {
      total: 0,
      right: 0,
      wrong: 0,
      seconds: 0,
    },
    endless: {
      total: 0,
      right: 0,
      wrong: 0,
      seconds: 0,
    },
  },
  precise: {
    ranked: {
      total: 0,
      right: 0,
      wrong: 0,
      seconds: 0,
    },
    endless: {
      total: 0,
      right: 0,
      wrong: 0,
      seconds: 0,
    },
  },
  context: {
    ranked: {
      total: 0,
      right: 0,
      wrong: 0,
      seconds: 0,
    },
    endless: {
      total: 0,
      right: 0,
      wrong: 0,
      seconds: 0,
    },
  },
};

export const getUserInfo = (userId) => {
  return axios.get(`${EXPO_PUBLIC_DB_URL}/users/${userId}.json?key=${EXPO_PUBLIC_GOOGLE_API_KEY}`);
};

// type: estimation, precise, context
// subType: ranked, endless
export const setUserGameData = async (userId, info, type, subType) => {
  const { data: userData } = await getUserInfo(userId);

  return axios.patch(`${EXPO_PUBLIC_DB_URL}/users.json`, {
    [userId]: {
      id: userId,
      ...(userData || DEFAULT_USER_DATA),
      [type]: {
        ...(userData?.[type] || DEFAULT_USER_DATA[type]),
        [subType]: { ...info },
      },
    },
  });
};

export const getUsers = () => {
  return axios.get(`${EXPO_PUBLIC_DB_URL}/users.json`);
};
