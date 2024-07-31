import Link from "next/link";

import { routes } from "../routes";

type Route = {
  name: string;
  path: string;
};
const FooterNav = () => {
  return (
    <nav className="mb-4 flex flex-col justify-between">
      {routes.map((r: Route) => {
        return (
          <Link key={r.path} href={r.path}>
            {r.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default FooterNav;
