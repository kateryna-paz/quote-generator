import Link from "next/link";
import Logo from "./logo";
import { routes } from "../routes";

type Route = {
  name: string;
  path: string;
};

const Header = () => {
  return (
    <header className=" px-6 py-4 flex gap-2 items-center bg-green-600 text-white rounded-b-3xl">
      <Link href="/">
        <Logo width={60} height={60} />
      </Link>

      <nav className="ml-4 flex-1">
        <ul className="list-none flex flex-row gap-4">
          {routes.map((r: Route) => {
            return (
              <li key={r.path}>
                <Link href={r.path}>{r.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
