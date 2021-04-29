import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavItem from '@material-tailwind/react/NavItem';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';

export default function LandingNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <div className="absolute w-full z-20">
            <Navbar color="transparent" navbar>
                <NavbarContainer>
                    <NavbarWrapper>
                        <NavbarBrand>
                            <a
                                href="https://material-tailwind.com?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Material Tailwind
                            </a>
                        </NavbarBrand>
                        <NavbarToggler
                            onClick={() => setOpenNavbar(!openNavbar)}
                            color="white"
                        />
                    </NavbarWrapper>

                    <NavbarCollapse open={openNavbar}>
                        <Nav>
                            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                                <NavItem
                                    href="https://material-tailwind.com/documentation/quick-start?ref=mtk"
                                    target="_blank"
                                    rel="noreferrer"
                                    ripple="light"
                                >
                                    <Icon name="description" size="2xl" />
                                    &nbsp;Docs
                                </NavItem>
                                <NavItem
                                    href="https://material-tailwind.com/components?ref=mtk"
                                    target="_blank"
                                    rel="noreferrer"
                                    ripple="light"
                                >
                                    <Icon name="apps" size="2xl" />
                                    &nbsp;Components
                                </NavItem>
                                <div className="text-white">
                                    <Dropdown
                                        color="transparent"
                                        size="sm"
                                        buttonType="link"
                                        buttonText={
                                            <div className="py-2.5 font-medium flex items-center">
                                                <Icon
                                                    name="view_carousel"
                                                    size="2xl"
                                                    color="white"
                                                />
                                                <span className="ml-2">
                                                    Templates
                                                </span>
                                            </div>
                                        }
                                        ripple="light"
                                    >
                                        <Link to="/landing">
                                            <DropdownItem color="lightBlue">
                                                Landing
                                            </DropdownItem>
                                        </Link>
                                        <Link to="/profile">
                                            <DropdownItem color="lightBlue">
                                                Profile
                                            </DropdownItem>
                                        </Link>
                                        <Link to="/login">
                                            <DropdownItem color="lightBlue">
                                                Login
                                            </DropdownItem>
                                        </Link>
                                        <Link to="/register">
                                            <DropdownItem color="lightBlue">
                                                Register
                                            </DropdownItem>
                                        </Link>
                                    </Dropdown>
                                </div>
                                <NavItem
                                    href="https://github.com/creativetimofficial/material-tailwind?ref=mtk"
                                    target="_blank"
                                    rel="noreferrer"
                                    ripple="light"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-github"
                                        size="xl"
                                    />
                                    &nbsp;Github
                                </NavItem>
                                <NavItem
                                    href="https://github.com/creativetimofficial/material-tailwind/issues?ref=mtk"
                                    target="_blank"
                                    rel="noreferrer"
                                    ripple="light"
                                >
                                    Issues
                                </NavItem>
                            </div>
                        </Nav>
                    </NavbarCollapse>
                </NavbarContainer>
            </Navbar>
        </div>
    );
}
