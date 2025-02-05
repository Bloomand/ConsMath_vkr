import { useCallback, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserGameData } from "../src/firebaseApi/userActions";

// type: estimation, precise, context
// subType: ranked, endless
export const useSetUserInfo = ({
  data,
  time,
  scoreData,
  setUserInfo,
  shouldSave,
  type,
  subType,
}) => {
  const setUserInfoCallback = useCallback(async () => {
    try {
      if (!shouldSave) return;

      console.log("save");

      const rightAnswers = data.reduce(
        (acc, item) => (item.answer == item.expect ? acc + 1 : acc),
        0
      );

      if (rightAnswers < scoreData.right) return;

      const newData = {
        total: data.length,
        right: rightAnswers,
        wrong: data.length - rightAnswers,
        seconds: Math.floor(time / data.length),
      };

      const userId = await AsyncStorage.getItem("user-id");
      await setUserGameData(userId, newData, type, subType);

      setUserInfo((prev) => ({
        ...prev,
        [type]: { ...prev[type], [subType]: newData },
      }));
    } catch (error) {
      console.log("Set user error", error);
    }
  }, [data, setUserInfo, time, scoreData.right, type, subType, shouldSave]);

  useEffect(() => {
    setUserInfoCallback();
  }, [setUserInfoCallback]);
};
