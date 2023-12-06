import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar
} from "@nextui-org/react";
import Logo from "./logo";

const NavbarComponent = () => {
  return (
    <Navbar
      className="bg-white rounded-[16px] mb-10
        shadow-[0_8px_17px_0_rgba(0,0,0,0.1)]
      "
    >
      <NavbarBrand className="gap-[16px]">
        <Logo />
        <p className="font-bold text-inherit">Університет</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-[32px]" justify="center">
        <NavbarItem>
          <Link isDisabled color="foreground" href="#">
            Головна
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link isDisabled color="foreground" href="#">
            Список курсів
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link isDisabled color="foreground" href="#">
            Розклад занять
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="/students-rates">
            Рейтинг студентів
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Ivan Oleksiuk"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              // src="https://instagram.flwo6-1.fna.fbcdn.net/v/t51.2885-19/300822250_1260596961144473_5104793527041983668_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.flwo6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=SxTnCTP7uvkAX_FUtOz&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBm5WmO5sV6re8Pt_sL2cNedYDWL0nkkbshpHXFbZePjQ&oe=65753DD9&_nc_sid=b41fef"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">@_ivanoleksiuk</p>
            </DropdownItem>
            <DropdownItem isDisabled key="settings">My Settings</DropdownItem>
            <DropdownItem isDisabled key="configurations">Configurations</DropdownItem>
            <DropdownItem isDisabled key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              <span className="text-red-500">
                Log Out
              </span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export default NavbarComponent;
