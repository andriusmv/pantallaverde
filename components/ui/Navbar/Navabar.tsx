import Link from "next/link";
import { useUser } from "@/utils/useUser";

const Navabar = () => {
  const { user } = useUser();

  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/pro">
        <a>Pro</a>
      </Link>
      <Link href={user ? "/logout" : "/signin"}>
        <a>{user ? "Logout" : "Signin"}</a>
      </Link>
    </nav>
  );
};

export default Navabar;