import { useEffect } from "react";
import { useUser } from "@/utils/useUser";

const Logout = () => {
  const { logout } = useUser();

  useEffect(logout, []);

  return <p>Logging out</p>;
};

export default Logout;