import { Avatar, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link, useLocation } from "react-router";
import logoAD from "@/assets/LogoAD.png";
import profileimg from "@/assets/img-perfil.jpg";
import { useEffect } from "react";

function NavBar() {
  const location = useLocation();
  console.log("location:", location.pathname);

  useEffect(() => {}, []);

  return (
    <Navbar fluid className="bg-fuchsia-900">
      <Link to="/">
        <NavbarBrand>
          <img src={logoAD} className="mr-3 h-11 sm:h-13" alt="Logo Alejandro Duque" />
          <span className="self-center ml-2 whitespace-nowrap text-lg font-semibold dark:text-white">WebDev Portfolio</span>
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
          <NavbarLink className="text-black text-lg hover:text-indigo-900" active={location.pathname === "/"}>
            Home
          </NavbarLink>
        </Link>
        <Link to="/aboutme">
          <NavbarLink className="text-black text-lg hover:text-indigo-900" active={location.pathname === "/aboutme"}>
            About me
          </NavbarLink>
        </Link>
        <Link to="/projects">
          <NavbarLink className="text-black text-lg hover:text-indigo-900" active={location.pathname === "/projects"}>
            Projects
          </NavbarLink>
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
export default NavBar;
