import { Link, useLocation } from "react-router-dom";
import Menu from "./elements/Menu";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const routeList = [
    { path: "/home", label: "Home" },
    { path: "/", label: "Recipes" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header>
      <div className="cover-photo h-screen md:h-[50vh] relative w-full bg-cover bg-center">
        <div className="logo-display h-[100%]"></div>
      </div>
      <nav>
        <Menu routeList={routeList} />
        <div className="max-sm:hidden flex flex-wrap items-center justify-center mx-auto">
          <div className="items-center justify-between flex w-auto order-1">
            <ul className="flex gap-4 md:gap-8 font-medium md:mt-0">
              {routeList.map(
                ({ path, label }, index) =>
                  path && (
                    <li
                      key={index}
                      className={`link-item ${
                        currentPath === path && "active"
                      }`}
                    >
                      <Link to={path}>{label}</Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
