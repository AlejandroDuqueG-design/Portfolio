import { Avatar, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link, useLocation } from "react-router";
import ADLogo from "@/assets/ADLogo.png";
import profileimg from "@/assets/img-perfil.jpg";
import { useEffect } from "react";

function NavBar() {
  const location = useLocation();
  console.log("location:", location.pathname);

  useEffect(() => {}, []);

  return (
    <Navbar fluid className="bg-orange-700 fixed top-0 left-0 right-0 z-50">
      <Link to="/">
        <NavbarBrand>
          <img src={ADLogo} className="mr-3 h-9 sm:h-11" alt="Logo Alejandro Duque" />
          <span className="self-center ml-2 whitespace-nowrap text-lg font-normal dark:text-white">WebDev Portfolio</span>
        </NavbarBrand>
      </Link>

      <div className="flex md:order-2">
        <Link to="/aboutme">
          <Avatar alt="Profile" img={profileimg} rounded />
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link to="/">
          <NavbarLink className="text-black text-2xl font-light hover:text-indigo-800" active={location.pathname === "/"}>
            Home
          </NavbarLink>
        </Link>
        <Link to="/aboutme">
          <NavbarLink className="text-black text-2xl font-light hover:text-indigo-800" active={location.pathname === "/aboutme"}>
            About me
          </NavbarLink>
        </Link>
        <Link to="/projects">
          <NavbarLink className="text-black text-2xl font-light hover:text-indigo-800" active={location.pathname === "/projects"}>
            Projects
          </NavbarLink>
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
export default NavBar;
