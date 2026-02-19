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
    <Navbar fluid rounded>
      <Link to="/">
        <NavbarBrand>
          <img src={logoAD} className="mr-3 h-8 sm:h-11" alt="Logo Alejandro Duque" />
          <span className="self-center whitespace-nowrap text-l font-semibold dark:text-white">My WebDev Portfolio</span>
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
          <NavbarLink active={location.pathname === "/"}>Home</NavbarLink>
        </Link>
        <Link to="/aboutme">
          <NavbarLink active={location.pathname === "/aboutme"}>About me</NavbarLink>
        </Link>
        <Link to="/projects">
          <NavbarLink active={location.pathname === "/projects"}>Projects</NavbarLink>
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
export default NavBar;
