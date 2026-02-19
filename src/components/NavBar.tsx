import { Avatar, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router";

function NavBar() {
  return (
    <Navbar fluid rounded>
      <Link to="/">
        <NavbarBrand>
          <img src="/src/assets/LogoAD.png" className="mr-3 h-8 sm:h-11" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-l font-semibold dark:text-white">My WebDev Portfolio</span>
        </NavbarBrand>
      </Link>

      <div className="flex md:order-2">
        <Link to="/aboutme">
          <Avatar alt="User settings" img="/src/assets/img-perfil.jpg" rounded />
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active>Home</NavbarLink>
        <NavbarLink href="/aboutme">About me</NavbarLink>
        <NavbarLink href="/projects">Projects</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
export default NavBar;
