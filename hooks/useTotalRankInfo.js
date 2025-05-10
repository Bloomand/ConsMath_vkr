import { useCallback, useEffect, useMemo, useState } from "react";
import { getUsers } from "../src/firebaseApi/userActions";

export const useTotalRankInfo = (type, subType) => {
  const [scores, setScores] = useState([]);

  const getUsersInfoCallback = useCallback(async () => {
    try {
      const { data } = await getUsers();

      if (!data || !Object.values(data).length) return;

      console.log("Get users data", data);

      setScores(
        Object.values(data).reduce(
          (acc, item) =>
            item?.[type]?.[subType] ? [...acc, item[type][subType]] : acc,
          []
        )
      );
    } catch (error) {
      console.log("Get users error", error);
    }
  }, []);

  const mean = useMemo(() => {
    const sum = scores.reduce(
      (acc, item) => ({
        total: acc.total + item.total,
        right: acc.right + item.right,
        wrong: acc.wrong + item.wrong,
        seconds: acc.seconds + item.seconds,
      }),
      {
        total: 0,
        right: 0,
        wrong: 0,
        seconds: 0,
      }
    );

    return {
      total: sum.total / scores.length,
      right: sum.right / scores.length,
      wrong: sum.wrong / scores.length,
      seconds: sum.seconds / scores.length,
    };
  }, [scores]);

  const twentyPercent = useMemo(() => {
    return scores
      .sort((a, b) => b.right - a.right)
      .slice(0, Math.ceil(scores.length / 5));
  }, [scores]);

  const twentyPercentMean = useMemo(() => {
    const sum = twentyPercent.reduce(
      (acc, item) => ({
        total: acc.total + item.total,
        right: acc.right + item.right,
        wrong: acc.wrong + item.wrong,
        seconds: acc.seconds + item.seconds,
      }),
      {
        total: 0,
        right: 0,
        wrong: 0,
        seconds: 0,
      }
    );

    return {
      total: sum.total / twentyPercent.length,
      right: sum.right / twentyPercent.length,
      wrong: sum.wrong / twentyPercent.length,
      seconds: sum.seconds / twentyPercent.length,
    };
  }, [twentyPercent]);

  useEffect(() => {
    getUsersInfoCallback();
  }, [getUsersInfoCallback]);

  return { mean, twentyPercentMean };
};
