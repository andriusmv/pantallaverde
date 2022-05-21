import { useState, useEffect } from "react";
import { UserContext } from "./useUser";
import isUserGold from "./isUserGold";

export default function useGoldStatus(user: null) {
  const [GoldStatus, setGoldStatus] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      const checkGoldStatus = async function () {
        setGoldStatus(await isUserGold());
      };
      checkGoldStatus();
    }
  }, [user]);

  return GoldStatus;
}