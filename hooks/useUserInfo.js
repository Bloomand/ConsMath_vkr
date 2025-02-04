import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DEFAULT_USER_DATA, getUserInfo } from "../src/firebaseApi/userActions";

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState(DEFAULT_USER_DATA);

  const getUserInfoCallback = useCallback(async () => {
    try {
      const userId = await AsyncStorage.getItem("user-id");
      const { data } = await getUserInfo(userId);

      console.log("Get user data", data);

      setUserInfo(data || DEFAULT_USER_DATA);
    } catch (error) {
      console.log("Get user error", error);
    }
  }, []);

  useEffect(() => {
    getUserInfoCallback();
  }, [getUserInfoCallback]);

  return { userInfo, setUserInfo };
};
